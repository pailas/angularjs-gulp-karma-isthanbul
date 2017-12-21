var gulp = require('gulp'),
    open = require('gulp-open'),
    karma = require('karma');

gulp.task('unit:test', function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            //action: 'run',
            singleRun: false,
            autoWatch: true
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

gulp.task('unit:coverage', function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            // action: 'run',
            reporters: ['progress'],
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

gulp.task('coverage', ['unit:coverage'], function () {
    return gulp.src('./coverage/view/index.html')
        .pipe(open());
});


gulp.task('default', function () {
    gulp.start('coverage');
});

gulp.task('test', function () {
    gulp.start('unit:test');
});