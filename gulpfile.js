var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    protractor = require('gulp-protractor').protractor,
    util = require('gulp-util'),
    exec = require('child-process-promise').exec;

//gulp test --browser=chrome --view=mobile --tags=@important

var view = require('./tests/profile/view');
    capabilities = require('./tests/profile/capabilities');



gulp.task('test',function(){
    var execute = function(browser, view, tag){
        process.env.BROWSER = browser;
        process.env.VIEW = view;
        process.env.TAGS = tag;
        return exec('gulp protractor')
            .then(function (results) {
                console.log(results.stdout);
            })
            .catch(function (err) {
                console.error('ERROR: ',err.stdout);
            });
    };
    return execute(util.env.browser, util.env.view, util.env.tag);
});

gulp.task('protractor', function() {

    switch(process.env.VIEW) {
        case "desktop":
            process.env.VIEW = view.desktop;   
            break
        case "mobile":
            process.env.VIEW = view.mobile;
            //process.env.TAGS = view.mobileTag; 
            break
        default :
            process.env.VIEW = view.desktop; 
            break
    };

    console.log(process.env.BROWSER);
    console.log(process.env.VIEW);
    console.log(process.env.TAGS);

    return gulp.src(['./*/*.js'])
        .pipe(
            protractor({
                'configFile': "config.js"
            })
        );
});