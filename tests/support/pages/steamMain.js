var user = require('./../user'),
	path = require('path');

var steamMain = {
	getPage: function() {
		return browser.get('http://store.steampowered.com/');
	},
	steamLogin: function() {
		return browser.element(by.xpath('(.//*[@id="content_login"]//span[last()])[last()]')).click()
		.then(function() {
			browser.element(by.id('input_username')).sendKeys(user.login);
		})
		.then(function() {
			browser.element(by.id('input_password')).sendKeys(user.password);	
		})
		.then(function() {
			browser.element(by.xpath('.//*[@id="login_btn_signin"]/button')).click();
		})
		.then(function() {
			browser.sleep(5000);
		});
	},
	takeSteamScreenshot: function() {
		var fs = require('fs'),
			dir = path.resolve('./screenshots');
		if (!fs.existsSync(dir)){
    		fs.mkdirSync(dir);
		};
        function writeScreenShot(data, filename) {
            var stream = fs.createWriteStream(filename);
            stream.on('open', function(fd) {
        		stream.write(new Buffer(data, 'base64'));
            	stream.end();
            });
        }
        return browser.takeScreenshot().then(function(png) {
            	var currentdate = new Date(),
            		pathname = './screenshots/shot_' + currentdate.toLocaleTimeString() + '.png',
					file = path.resolve(pathname);
    			fs.writeFileSync(file, png, { encoding: 'base64' }, console.log);
  			});

            //writeScreenShot(png, '.\\screenshots\\shot_' + currentdate.toLocaleTimeString() + '.png');

	}
};

module.exports = steamMain;