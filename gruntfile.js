module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'builds/development/js/scripts.js' : ['components/js/*.js']
                }//files
            } //my_target
        }, //uglify
        watch: {
            options: {livereload: true},
            
            files: ['components/js/*.js'],
            tasks: ['uglify']
        } //watch
    }) //initConfig
    grunt.regiesterTask('default', 'watch');
} //exports
