module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 7080,
					hostname: '127.0.0.1',
					base: '',
					keepalive: true
				}
			}
		},
		less: {
			build: {
				files: {
					'static/css/main.css': 'static/less/bootstrap.less'
				},
				options: {
					compress: true,
					yuicompress: true,
					ieCompat: true,
					sourceMap: true,
					sourceMapFilename: 'static/css/main.css.map',
					relativeUrls: true,
					sourceMapURL: 'main.css.map',
					outputSourceFiles: true
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'static/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'static/css/',
				ext: '.min.css'
			}
		},
		cssbeautifier : {
			files : ["static/css/*.css"]
		},
		jshint: {
			all: ['static/js/**/*.js']
		},
		watch: {
			all: {
				files: ['static/less/**/*.less','static/js/**/*.js'],
				tasks: ['less','cssbeautifier','cssmin'],
				options: {
					livereload: true,
					nospaces: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-cssbeautifier');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['watch:all']);
	grunt.registerTask('serve', ['connect:server']);
};
