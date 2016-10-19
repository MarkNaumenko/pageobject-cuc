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
    
    this.Then(/^I will go to the market page of this game$/, function() {
        EC = protractor.ExpectedConditions;
        return browser.wait(EC.visibilityOf(by.xpath('(.//*[contains(text(),"F1 2016")])[1]')),15000)
        .then(function() {
            browser.element(by.xpath('(.//*[contains(text(),"F1 2016")])[1]')).click();
        });

        

    });

    this.Then(/^I will wait a bit$/, function() {
        return browser.sleep(4000);
    });   

};

module.exports = steps;