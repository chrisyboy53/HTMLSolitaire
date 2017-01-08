module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-coveralls');
    
    grunt.initConfig({
        env: {
            coverage: {
                APP_DIR_FOR_CODE_COVERAGE: 'test/coverage/instrument/src'
            }
        },
        coveralls: {
            // Options relevant to all targets
            options: {
            // When true, grunt-coveralls will only print a warning rather than
            // an error, to prevent CI builds from failing unnecessarily (e.g. if
            // coveralls.io is down). Optional, defaults to false.
            force: false
            },

            your_target: {
            // LCOV coverage file (can be string, glob or array)
            src: 'test/coverage/reports/lcov.info',
            options: {
                // Any options for just this target
            }
            },
        },
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
                            lines: 60,
                            statements: 60,
                            branches: 40,
                            functions: 50
                        }
                    }
                }
            },
            coveralls: {
                src: ['src/**/*.js'],
                options: {
                    specs: 'tests/**/*Spec.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'test/coverage/coverage.json',
                        report: {
                            type: 'lcov',
                            options: { dir: 'test/coverage/reports'}
                        },
                        thresholds: {
                            lines: 60,
                            statements: 60,
                            branches: 40,
                            functions: 50
                        }
                    }
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
            tasks: ['eslint', 'jasmine:full']
        }

    });

    grunt.registerTask('cover', ['jasmine:cover']);
    grunt.registerTask('coverallsTask', ['jasmine:coveralls', 'coveralls']);
    grunt.registerTask('test', 'jasmine:full');
    grunt.registerTask('build', ['eslint']);
    grunt.registerTask('default', 'watch');

}