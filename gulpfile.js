var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('./config/config.json');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpNgConfig = require('gulp-ng-config');
var includeSources = require('gulp-include-source');
var jade        = require('gulp-jade');
var sass = require('gulp-ruby-sass');

var devTasks  = ['env', 'libs', 'bootstrap-fonts', 'font-awesome-fonts','images','sass','jade','index','scripts', 'simple-server', 'watch'];
var prodTasks = ['env', 'libs', 'bootstrap-fonts', 'font-awesome-fonts','images','sass','jade','index','scripts'];

gulp.task('dev', devTasks);
gulp.task('prod', prodTasks);

//All Tasks
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('env', function () {
    //name of the app is myApp
    gulp.src('config/env.json')
        .pipe(gulpNgConfig('myApp',{
            environment: process.env.APP_ENV,
            createModule: false
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('simple-server', function(){
    connect.server(config.serve);
});

gulp.task('watch', function(){
    
    gulp.watch(config.path.sass.all, ['sass', 'css-reload']);
    gulp.watch(config.path.views.src,['jade','index','html-reload', 'index-reload']);
    gulp.watch(config.path.scripts, ['index','scripts','js-reload']);
    gulp.watch(config.path.index.src, ['index','index-reload']);
});

gulp.task('libs', function(){

     gulp.src(config.path.js)
        .pipe(gulp.dest('dist/js'));
    gulp.src(config.path.css)
        .pipe(gulp.dest('dist/css'));

});

gulp.task('bootstrap-fonts', function () {
    return gulp.src(config.path.fonts.bootstrap)
        .pipe(gulp.dest('dist/fonts/bootstrap'));
});

gulp.task('font-awesome-fonts', function () {
    return gulp.src(config.path.fonts.fontAwesome)
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('sass', function(){

    return sass(config.path.sass.src)
        .on('error', sass.logError)
        .pipe(gulp.dest(config.path.sass.dist));
});

gulp.task('images', function() {
    gulp.src(config.path.img.src)
        .pipe(gulp.dest(config.path.img.dist));
});

gulp.task('scripts', function () {
    return gulp.src(config.path.scripts)
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-reload', function(){
   return gulp.src(config.path.scripts)
        .pipe(connect.reload());
});

gulp.task('html-reload', function () {
    return gulp.src(config.path.views.distHtml)
        .pipe(connect.reload());
});

gulp.task('css-reload', ['sass'], function(){
    return gulp.src(config.path.css)
        .pipe(connect.reload());
});

gulp.task('jade', function(){
    return gulp.src(config.path.views.src)
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(config.path.views.dist));

});

gulp.task('index', function(){
    return gulp.src(config.path.index.src)
        .pipe(jade({
            pretty: true
        }))
        .pipe(includeSources())
        .pipe(gulp.dest(config.path.index.dist));
});

gulp.task('index-reload',  function(){
    return gulp.src(config.serve.index)
        .pipe(connect.reload());
});


