var steamStore = require('../support/pages/steamStore.js');

var steps = function() {

    this.setDefaultTimeout(60000);
    browser.ignoreSynchronization = true;
    
    this.Then(/^check '([^"]*)' feature$/, function(tag) {
        return element(by.xpath('.//a[text()="' + tag + '"]')).getText()
        .then(function(qwe) {
            expect(qwe).to.be.deep.equal(tag); //fix expect chai    
        });
    });

};

module.exports = steps;