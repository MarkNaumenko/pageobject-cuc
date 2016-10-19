steamStore = {
	get: function() {
		return browser.get('http://store.steampowered.com/');
	},
	searchGame: function(input) {
		return browser.findElement(by.id('store_nav_search_term')).sendKeys(input);
	},
	wait: function(timeout) {
		browser.sleep(timeout);
	}
};

module.exports = steamStore;