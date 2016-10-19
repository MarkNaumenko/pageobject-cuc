var steamStore = require('./steamStore.js');

var steps = function() {

    this.setDefaultTimeout(10000);
    browser.ignoreSynchronization = true;

    this.Given(/^I am on the market page$/, function () {
    	return steamStore.get();
    });

    this.When(/^I will input game in the search field$/, function() {
    	return steamStore.searchGame('F1 2016');
    });
    
    this.Then(/^Then I will wait a bit$/, function() {
        steamStore.wait(10000);
    });   
};

module.exports = steps;