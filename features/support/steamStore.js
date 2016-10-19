steamStore = {
	get: function() {
		return browser.get('http://store.steampowered.com/');
	},
	searchGame: function(input) {
		return browser.findElement(by.id('store_nav_search_term')).sendKeys(input);
	},
	sleep: function(timespan) {
		return browser.sleep(timespan);
	}
};

module.exports = steamStore;