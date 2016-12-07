module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.initConfig({
        
        jasmine: {
            full: {
                src: ['src/**/*.js'],
                options: {
                    specs: 'tests/**/*Spec.js'
                }
            }
        },

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

    grunt.registerTask('test', 'jasmine');
    grunt.registerTask('build', ['eslint','jasmine']);
    grunt.registerTask('default', 'watch');

}