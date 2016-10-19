exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  getPageTimeout: 15000,

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome',
    chromeOptions : {
      args: ['start-maximized','--disable-extensions']
    }
  },

  // Spec patterns are relative to this directory.
  specs: [
    'tests/features/*.feature'
  ],

  cucumberOpts: {
    require: 'tests/step_definitions/*.js'
  }

};