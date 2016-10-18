exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  getPageTimeout: 15000,

  setDefaultTimeout: 60000,

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  cucumberOpts: {
    require: 'features/step_definitions/stepDefinitions.js'
  }

};