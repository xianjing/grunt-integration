module.exports = function(grunt) {
    'use strict';

    var pkgInfo = {
        packageDir : 'app/dest',
        sourceDir : 'app'
    };

    grunt.initConfig({
        // task configuration
        pkgInfo: pkgInfo,
        pkg:'',
        clean: {
          build: {
              src:['<%= pkgInfo.packageDir%>'],
              force: true
          }
        },
        useminPrepare : {
            html: ['<%= pkgInfo.packageDir %>/index*.html'],
            options: {
                dest: '<%= pkgInfo.packageDir %>'
            }
        },
        usemin:{
            html: ['<%= pkgInfo.packageDir %>/index*.html'],
            options: {
                dirs: ['<%= pkgInfo.packageDir %>']
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '.',
                        flatten: true,
                        dest: '<%= pkgInfo.packageDir %>',
                        src: [
                            '<%= pkgInfo.sourceDir%>/*.html'
                        ]
                    }
                ]
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s)
    grunt.registerTask('default', ['clean','copy','useminPrepare', 'concat', 'uglify','usemin' ]);
};