module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        kiosk_scripts: {
          files: {
            'build/js/maya_interviews.min.js': [
              'libs/jquery-1.9.1.min.js',
              'libs/handlebars.runtime.js',
              'libs/video.min.js',
              'source/js/init.js',
              'source/js/video_kiosk.js',
              'source/content/maya_interviews.js',
              'source/js/screensaver.js'
            ]
          }
        }
    },
    cssmin: {
      compress: {
        files: {
          'build/css/maya_interviews.min.css': ['source/css/maya.css', 'source/css/video-js.min.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CSSMin plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Handlebars compiler plugin
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
