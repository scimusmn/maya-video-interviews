// Error handler
$(document).ready(function() {
  window.onerror = function() {
    location.reload();
  }
});

/**
 * Initialize the kiosk start page.
 * - Load and read the config file.
 * - Load precompiled handlebars template.
 * - Load video playback behaviors from video_kiosk.js.
 *
 * @param compile - BOOLEAN - Is the template precompiled?
 *
 */
var kiosk_init = function(compile) {

  // Path to the config file
  var config = '../config/config.json';

  // Read the config file
  $.getJSON(config, function(data) {

    // Set a body class with the component name
    $('body').addClass(data.component_name);

    // Set the component name as a variable
    var component = eval(data.component_name);

    if (compile !== true) {
      console.log('Dev mode');

      // If the templates aren't compiled, run them through the compiler
      $.ajax({
        url: 'templates/videos.handlebars',
        cache: true,
        success: function (source) {
          var template = Handlebars.compile(source);
          $('#container').html(template(component));
          // Then initialize video functionality after half a second
          // The delay prevents people from starting a video when exiting the screensaver
          setTimeout(video_kiosk, 300);
        }
      });

    } else {
      // Precompiled template just needs to be output into the DOM
      var template = Handlebars.templates['videos'],
      html = template(component);

      // Output markup into container div, then start video functionality
      $('#container').html(html);
      setTimeout(video_kiosk, 300);

    }

  });

}
