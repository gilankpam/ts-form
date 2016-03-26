module.exports = function(grunt) {

    grunt.initConfig({

        // For compiling our TypeScript/JavaScript
        ts: {
            build: {
                src: ['src/TSForm/**/*.ts', 'src/module.ts', '!node_modules/**/*.ts'],
                out: 'build/ts-form.js',
                reference: 'src/ts-form.r.ts',
                options: {
                    declaration: true
                }
            },
            test: {
                src: ['test/**/*.ts', '!node_modules/**/*.spec.ts'],
                out: 'test/ts-form.spec.js',
                options: {
                    sourceMap: false
                }
            },
            example: {
                src: ['examples/**/*.ts'],
                options: {
                    sourceMap: false
                }
            }
        },

        html2js: {
            options: {
                singleModule: true,
                existingModule: true,
                module: 'ts-form-templates',
                rename: function(moduleName) {
                    return moduleName.replace('../templates/', 'templates/');
                },
                htmlmin: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                }
            },
            build: {
                src: ['templates/**/*.html'],
                dest: './build/ts-form.tpls.js'
            }
        },

        uglify: {
            build: {
                files: {
                    'build/ts-form.min.js': ['build/ts-form.js']
                }
            }
        },

        karma: {
            dev: {
                configFile: 'karma.conf.js'
            },
            build: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        release: {
            options: {
                additionalFiles: ['bower.json'],
                indentation: '    ', // four spaces
                beforeRelease: [
                    'build'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-html2js');

    /** Dirty-hack **/
    grunt.registerTask('stripref', function() {


        var contents = grunt.file.read('./build/ts-form.d.ts');
        contents = contents.replace("/// <reference path=\"../node_modules/ts-core/build/ts-core.d.ts\" />\n", "");
        contents = contents.replace("/// <reference path=\"../typings/tsd.d.ts\" />\n", "");
        grunt.file.write('./build/ts-form.d.ts', contents);
    });

    /** Development **/
    grunt.registerTask('compile', [
        'ts:build',
        'ts:test',
        'ts:example',
        'stripref'
    ]);

    grunt.registerTask('test', [
        'compile',
        'karma:dev'
    ]);

    /** Release **/
    grunt.registerTask('build', [
        'compile',
        'html2js',
        'karma:build',
        'uglify:build'
    ]);
};
