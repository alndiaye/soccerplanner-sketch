//Get gulp and wrap it to use gulp-help plugin to allow gulp help
var gulp = require('gulp-help')(require('gulp'));
var nunjucksRender = require('gulp-nunjucks-render');
//clean plugin
var clean = require('gulp-clean');


gulp.task('copy:js','Copy the statics js files.', function () {
    return gulp.src('src/js/**/*.js',{base: 'src'})
           .pipe(gulp.dest('dist'));
});

gulp.task('copy:img', 'Copy the images.', function () {
    return gulp.src('src/img/**/*',{base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:fonts', 'Copy the fonts', function () {
    return gulp.src('src/fonts/**/*',{base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:css', 'Copy the css.', function () {
    return gulp.src('src/css/**/*',{base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:others', 'Copy the static html and other statics resources on root directory.', function () {
    return gulp.src(['src/*.html','src/.htaccess','src/*.png','src/*.xml','src/*.ico','src/*.txt'],{base: 'src'})
        .pipe(gulp.dest('dist'));
});



gulp.task('clean', 'Clean the dist repository.', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});


gulp.task('templates', 'Generates the html from the templates.',function () {
    return gulp.src(['src/templates/*.nkj','!src/templates/*-tpl.nkj'])
        .pipe(nunjucksRender({
            path: ['src/templates/'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('copy:statics', 'Copy all statics files', ['copy:js','copy:img','copy:fonts','copy:css','copy:others']);
gulp.task('default', 'Copy statics files and generate templates.',['copy:statics', 'templates']);