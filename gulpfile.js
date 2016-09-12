var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('copy:js', function () {
    return gulp.src('src/js/**/*.js',{base: 'src'})
           .pipe(gulp.dest('dist'));
});

gulp.task('copy:img', function () {
    return gulp.src('src/img/**/*',{base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:fonts', function () {
    return gulp.src('src/fonts/**/*',{base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:css', function () {
    return gulp.src('src/css/**/*',{base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:others', function () {
    return gulp.src(['src/*.html','src/.htaccess','src/*.png','src/*.xml','src/*.ico','src/*.txt'],{base: 'src'})
        .pipe(gulp.dest('dist'));
});


gulp.task('templates', function () {
    return gulp.src(['src/templates/*.nkj','!src/templates/*-tpl.nkj'])
        .pipe(nunjucksRender({
            path: ['src/templates/'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('copy:statics', ['copy:js','copy:img','copy:fonts','copy:css','copy:others']);
gulp.task('default', ['copy:statics', 'templates']);