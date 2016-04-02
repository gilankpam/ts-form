module.exports = function(grunt) {

    grunt.initConfig({
        html2js: {
            options: {
                singleModule: true,
                existingModule: false,
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
                dest: './lib/ts-form.tpls.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-html2js');
};
