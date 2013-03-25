module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        kiosk_scripts: {
          files: {
            'build/js/maya_interviews.min.js': [
              'libs/jquery-1.9.1.min.js',
              'libs/handlebars.js',
              'libs/video.min.js',
              'src/js/init.js',
              'src/js/video_kiosk.js',
              'src/content/maya_interviews.js',
              'src/js/screensaver.js'
            ]
          }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
