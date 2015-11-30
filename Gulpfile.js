// Carrega Gulp e plugins
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var watch = require('gulp-watch');

// Diretório dos arquivos
var request = './request.coffee';

// Nova tarefa: coffee
gulp.task('coffee', function() {
	return gulp.src(request)
			.pipe(coffee({bare: true}).on('error', gutil.log))
			.pipe(gulp.dest('./'));
});

gulp.task('default', function(callback) {

  gulp.run('coffee');

	watch(request, function() {
		gulp.run('coffee');
	});
});
