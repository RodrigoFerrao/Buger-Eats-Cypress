class SignupPage{

  browserSettings(){
  
  cy.visit('https://buger-eats.vercel.app/')
  cy.viewport(1440, 900)
// Assert para identificar o carregamento da página
  cy.get('div [class="content"] main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  cy.get('img[alt="Buger Eats"]').should('be.visible')
  cy.get('a[href="/deliver"]').should('be.visible')   
 
  cy.get('a[href="/deliver"]').click()   


}
  fillform(courier){
  // Assert que o usuario se encontra na página correta.
  cy.get('div[id="page-deliver"] form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    // Dados do courier
    cy.get('input[name="name"]').type(courier.name);
    cy.get('input[name="cpf"]').type(courier.cpf);
    cy.get('input[name="email"]').type(courier.email);
    cy.get('input[name="whatsapp"]').type(courier.whatsapp);

    // Endereço do courier
    cy.get('input[name="postalcode"]').type(courier.address.postalcode);
    cy.get('input[type="button"]').click();
    cy.get('input[name="address-number"]').type(courier.address.number);
    cy.get('input[name="address-details"]').type(courier.address.address_details);
   
    // Validando endereço do courier
    cy.get('input[name="address"]').should('have.value', courier.address.street);
    cy.get('input[name="district"]').should('have.value', courier.address.district);
    cy.get('input[name="city-uf"]').should('have.value', courier.address.city_state);
    cy.get('input[name="postalcode"]').should('have.value', courier.address.postalcode);

    // Escolhendo metodo de entrega
    cy.get('li [src="/static/media/moto.c7bfc5a6.svg"]').click();
   
    // Fazendo upload da CNH
    cy.get('div [class ="dropzone"] input[type="file"]').attachFile('../fixtures/imagens/cnh-digital.jpg')
  }
  submit(){
    cy.get('button[class="button-success"]').click()
  }
  modalValidation(expectedMessage){
    // Validando Sucesso no teste    
    cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage);
  }
  alertMessage(expectedMessage){
    // cy.get('div [class="alert-error"]').should('have.text', expectedMessage)
    cy.contains('div [class="alert-error"]', expectedMessage).should('be.visible')
  }
}

export default new SignupPage;