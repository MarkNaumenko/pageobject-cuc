var user = require('./../user');

steamStore = {
	getPage: function() {
		return browser.get('http://store.steampowered.com/');
	},
	searchGame: function(input) {
		return browser.element(by.id('store_nav_search_term')).sendKeys(input);
	},
	addGameToCart: function() {
		return browser.element(by.xpath('(.//div[@class="btn_addtocart"])[1]')).click();
	},
	getButtonBuyForMySelf: function() {
		return browser.element(by.id('btn_purchase_self'));
	},
	steamLogin: function() {
		return browser.element(by.css('.global_action_link')).click()
		.then(function() {
			browser.element(by.id('input_username')).sendKeys(user.login);
		})
		.then(function() {
			browser.element(by.id('input_password')).sendKeys(user.password);	
		})
		.then(function() {
			browser.element(by.css('.btnv6_blue_hoverfade.btn_medium')).click();
		})
		.then(function() {
			browser.sleep(5000);
		});
	}
};

module.exports = steamStore;