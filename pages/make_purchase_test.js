Feature('purchase');

Scenario('Purchase successes',  ({ I }) => {
  I.fillField('#email', 'teste@teste.com')
  I.fillField('#password', '123456')
  I.click('#login-button')

  //Seleciona o endereço e confirma
  I.click('//android.widget.TextView[@text="Selecione seu endereço..."]')
  I.click('#android:id/button1')

  // Clica na pastelaria da maria
  I.click('//android.widget.TextView[@text="Pastelaria da Maria"]')
  
});
