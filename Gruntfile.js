module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            min: {
                options: {
                    sourceMap: false,
                    compress: {
                        drop_console: true
                    }
                },
                files: [
                    {
                        'urlify.min.js': 'urlify.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['uglify:min']);
};