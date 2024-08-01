const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automation_appium',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      url: 'http://127.0.0.1:4723/', // URL do servidor Appium
      platformName: 'Android',
      app: 'E:/MEGA/Cursos/QAZando/QAFood_app_release.apk',
      desiredCapabilities: {
        deviceName: 'emulator-5554', // Nome do dispositivo
        appPackage: 'com.qazandoqafood', // Pacote do aplicativo
        appActivity: 'MainActivity', // Atividade inicial do aplicativo
        automationName: 'UiAutomator2',
        platformVersion: '14' // Versão do Android
      },
    }
  },
  include: {
    I: './steps_file.js' // Local do arquivo de etapas
  },
};