var steamStore = require('../support/pages/steamStore.js');

var steps = function() {

    this.setDefaultTimeout(60000);
    browser.ignoreSynchronization = true;

    this.Given(/^I am on the market page$/, function () {
    	return steamStore.getPage();
    });

    this.When(/^I will input game in the search field$/, function() {
    	return steamStore.searchGame('F1 2016');
    });
    
    this.Then(/^I will wait a bit$/, function() {
        return browser.sleep(4000);
    });   

};

module.exports = steps;