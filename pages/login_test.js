/// <reference types='codeceptjs'>

Feature('login');

Scenario('Login success',  async ({ I }) => {
    I.wait(5)
    I.fillField('#email', 'teste@teste.com')
    I.fillField('#password', '123456')
    I.click('#login-button')

    // Verifica se o campo de pesquisa esta visivel na tela após realizar login
    I.waitForVisible('#search-field', 4)
    I.seeElement('#search-field')
});

Scenario('Login error', async ({ I }) => {
    I.wait(5)
    I.fillField('#email', 'teste@.com')
    I.fillField('#password', '123456')
    I.click('#login-button')

    I.seeElement('Erro ao realizar login')
})

// Scenario('MAKE PURCHASE', async ({ I }) => {
//     I.wait(5)
//     I.fillField('#email', 'teste@teste.com')
//     I.fillField('#password', '123456')
//     I.click('#login-button')

//     // Seleciona o endereço e confirma
//     I.click('//android.widget.TextView[@text="Selecione seu endereço..."]')
//     I.click('#android:id/button1')

//     // Clica na pastelaria da maria
//     I.click('//android.widget.TextView[@text="Pastelaria da Maria"]')




    // await I.runOnAndroid(() => {
    //     I.executeScript('mobile: scroll', { 
    //         strategy: 'xpath', 
    //         selector: '(//android.view.ViewGroup[@content-desc="add-item-buttom"])[4]/android.widget.ImageView',
    //         direction: 'down'
    //     })
    // });
// })