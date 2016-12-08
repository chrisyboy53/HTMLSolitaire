module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-istanbul');

    grunt.initConfig({
        
        jasmine: {
            full: {
                src: ['src/**/*.js'],
                options: {
                    specs: 'tests/**/*Spec.js',
                }
            },
            cover: {
                src: ['src/**/*.js'],
                options: {
                    specs: 'tests/**/*Spec.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'test/coverage/coverage.json',
                        report: 'test/coverage/reports',
                        thresholds: {
                            lines: 100,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        }
                    }
                }
            }
        },

        instrument: {
            files: 'src/**/*.js',
            options: {
                lazy: true,
                basePath: 'test/coverage/instrument/'
            }
        },

        storeCoverage: {
            options: {
                dir: 'test/coverage/reports'
            }
        },
        makeReport: {
            src: 'test/coverage/reports/**/*.json',
            options: {
                type: 'lcov',
                dir: 'test/coverage/reports',
                print: 'detail'
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
            tasks: ['eslint', 'jasmine']
        }

    });

    grunt.registerTask('cover', ['instrument', 'jasmine:cover', 'storeCoverage', 'makeReport'])
    grunt.registerTask('test', 'jasmine:full');
    grunt.registerTask('build', ['eslint','jasmine:full']);
    grunt.registerTask('default', 'watch');

}