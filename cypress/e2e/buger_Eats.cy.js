import SignupPage from "../Pages/SignupPage";
import signup from "../Pages/SignupPage";

describe("Home Page", () => {
  it("Dado que app está online", () => {
    signup.browserSettings();
  });
});

describe("Cadastro", () => {
  beforeEach(function () {
    cy.fixture("courier.json").then((massa_entregador) => {
      this.courier = massa_entregador;
    });
  });

  it("Usuario deve se tornar um entregador", function () {
    // instanciando a classe signupPage
    signup.browserSettings();
    signup.fillform(this.courier.cadastro_Sucesso);
    signup.submit();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalValidation(expectedMessage);
  });

  it("Dado CPF invalido usuario não deve se tornar um entregador", function () {
    signup.browserSettings();
    signup.fillform(this.courier.cpf_Invalido);
    signup.submit();
    signup.alertMessage("Oops! CPF inválido");
  });

  it("Dado e-mail invalido usuario não deve se tornar um entregador", function () {
    signup.browserSettings();
    signup.fillform(this.courier.email_Invalido);
    cy.get('input[name="email"]').should("not.contains.value", "@");
    signup.submit()
  });

  context("Dado campos ausentes usuario não deve se tornar um entregador", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ]

    before (function(){
      signup.browserSettings()
      signup.submit()
    })
      messages.forEach(function(msg){
        it(`${msg.field} is mandatory`, function(){
          signup.alertMessage(msg.output)
        })
      })
  })
});
