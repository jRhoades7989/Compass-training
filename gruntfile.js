module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'builds/development/js/scripts.js' : ['components/js/*.js']
                }//files
            } //my_target
        }, //uglify
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } //options
            } //dev
        }, //compass
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['components/js/*.js'],
                tasks: ['uglify']
            }, //scripts
            html: {
                files: ['builds/development/index.html']
            }, //html
            sass: {
                files: ['components/sass/*.scss'],
                tasks: ['compass:dev']
            } //sass
        } //watch. Use with script src="http://localhost:35729/livereload.js"
    }) //initConfig
    grunt.registerTask('default', 'watch');
} //exports
