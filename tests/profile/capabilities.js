var capabilities = {
    firefox: {
        "browserName" : "firefox",
        "marionette": true,
        "browser.startup.page": 0,
        "startup.homepage_welcome_url.additional": "about:blank"
    },
    chrome: {
        "browserName" : "chrome",
        chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
    }
}
module.exports = capabilities;