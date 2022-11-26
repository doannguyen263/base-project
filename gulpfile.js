var gulp = require('gulp');
// Requires plugin
const sass = require('gulp-sass')(require('sass'));
var minifyCss = require('gulp-postcss');
var rename = require('gulp-rename');
//
const paths = {
	stylesConvert :{
		src : 'app/assets/scss/*.scss',
		dest : 'app/assets/css',
	},
	scripts :{
		src : 'app/assets/js/*.js',
		dest : 'app/assets/js',
	},
	output: 'output'
}
//
gulp.task('css', function () {
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dest'));
});

// Compile Our Sass
function defaultTask(cb) {

	return gulp.src(paths.stylesConvert.src)
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths.stylesConvert.dest))
        // .pipe(livereload());

	// return gulp.src('app/assets/scss/main.scss')
    // .pipe(sass()) // Using gulp-sass
    // .pipe(gulp.dest('app/assets/css'))


  // place code for your default task here
  cb();

}

exports.default = defaultTask