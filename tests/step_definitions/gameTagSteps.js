// var steamStore = require('../support/pages/steamStore.js');

// var steps = function() {

//     this.setDefaultTimeout(60000);
//     browser.ignoreSynchronization = true;


//     this.Then(/^I will wait a bit$/, function() {
//         return browser.sleep(5000);
//     });   

//     this.Then(/^I will add game to the cart$/, function() {
//         return steamStore.addGameToCart();
//     });

//     this.Then(/^purchase game for my self$/, function() {
//         return steamStore.getButtonBuyForMySelf().click();
//     });

// };

// module.exports = steps;