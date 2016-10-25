exports.config = {
  
  getPageTimeout: 15000,

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  multiCapabilities: [
  {'browserName': 'chrome',
   chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
  specs: [
    'tests/features/gameTag.feature'
  ],
  }, 
  {'browserName': 'chrome',
   chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
  specs: [
    'tests/features/buyGame.feature'
  ],

  }],

  cucumberOpts: {
    require: 'tests/step_definitions/*.js',
    format: 'pretty',
    tags: '@important'
  },

  onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
  }

};