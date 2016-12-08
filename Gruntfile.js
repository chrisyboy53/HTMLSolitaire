module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    grunt.initConfig({
        env: {
            coverage: {
                APP_DIR_FOR_CODE_COVERAGE: 'test/coverage/instrument/src'
            }
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

    grunt.registerTask('cover', ['jasmine:cover'])
    grunt.registerTask('test', 'jasmine:full');
    grunt.registerTask('build', ['eslint']);
    grunt.registerTask('default', 'watch');

}