'use strict';

var isStart = true;

module.exports = function () {

    this.Before(function () {
    	this.setDefaultTimeout(60000);
    	browser.ignoreSynchronization = true;
    });

};