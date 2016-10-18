var steps = function() {

    this.setDefaultTimeout(60000);
    browser.ignoreSynchronization = true;

    this.Given(/^I am on the '([^"]*)' page$/, function (page) {

    	return browser.get(page);
        // var _this = this;

        // return _this.browserUtils.navigateTo(page,profile)

        //     .then(function(){
        //         return browser.ignoreSynchronization=true;
        //     })
        //     .then(function(){
        //         return _this.pageFactory.currentPage.waitForPageLoaded();
        //     })
        //     .then(function(){
        //         return browser.ignoreSynchronization=false;
        //     })
        //     .then(function(){
        //         return browser.sleep(500);
        //     })
        //     .then(function(){
        //         return _this.helper.closeNotice('edr');
        //     })
        //     .then(function(){
        //         return browser.sleep(500);
        //     })
        //     .then(function(){
        //         return _this.helper.closeNotice('suitcase');
        //     })
        //     .then(function(){
        //         return _this.helper.closeNotice('cookie');
        //     })
        //     .then(function(){
        //         return _this.helper.closeNotice('error');
        //     });
    });

    this.Then(/^I will go to the market$/, function() {
    	browser.findElement(by.css('.submenu_community')).click;
    	return browser.sleep(5000);
    });
    

};

module.exports = steps;