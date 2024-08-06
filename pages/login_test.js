/// <reference types='codeceptjs'>

Feature('login');

Scenario('Tentando rodar o teste',  ({ I }) => {
    I.wait(10)
    I.fillField('#email', 'teste@teste.com')
    I.fillField('#password', '123456')
    I.click('#login-button')

    // Verifica se o campo de pesquisa esta visivel na tela após realizar login
    I.waitForVisible('#search-field', 4)
    I.seeElement('#search-field')
});