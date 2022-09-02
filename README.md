# Buger-Eats-Cypress
Projeto criado utilizando Cypress, onde o objetivo é automatizar a função de cadastro em uma plataforma de delivery.

# Versões utilizadas
Cypress: 10.7.0 <br />
Node: 16.7.0 <br />
Cypress-file-upload: 5.0.8

# Como rodar os testes
1. Fazer o download do código utilizando
```bash
npm install cypress --save-dev
```
2. Caso deseje realizar o teste em algum navegador especifico utilize, substituindo chrome pelo navegador desejado:
```bash
npx cypress run -b chrome
```
3. Caso deseje acompanhar os reports ao vivo pelo site do cypress, utilize esse comando:
```bash
npx cypress run --record --key 7da13ab9-1034-4627-9cff-467db0770644
```
Em seguida acesse o cypress dashboard atraves desse [link]([url](https://dashboard.cypress.io/projects/jkuavf/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D))
