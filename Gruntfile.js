module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        
        eslint: {
            options: {
                config: ".eslintrc"
            },
            target: ['src/**/*.js']
        },

        watch: {
            files: ['<%= eslint.target %>'],
            tasks: ['eslint']
        }

    });

    grunt.registerTask('build', 'eslint');
    grunt.registerTask('default', 'watch');

}