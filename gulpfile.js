const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');
// const bundle = require('gulp-bundle-assets');

gulp.task('sass', function () {
	return gulp
		.src('sass/custom.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(clean({ compatibility: 'ie11' }))
		.pipe(gulp.dest('assets'));
});

// gulp.task('bundle', function () {
// 	return gulp
// 		.src('./bundle.config.js')
// 		.pipe(bundle())
// 		.pipe(gulp.dest('./assets'));
// });

gulp.task('watch', function () {
	gulp.watch('sass/**/*.scss', gulp.series('sass'));
	themeKit.command('watch', {
		allowLive: true,
		env: 'development',
	});
});
