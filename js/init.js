/**
 * Initialize the kiosk start page.
 * - Load and read the config file.
 * - Run handlebars.compile to insert content into templates.
 * - Load video playback behaviors from video_kiosk.js.
 */

// Get the kiosk settings from config.json.
$.getJSON('config/config.json', function(data) {

  // Use the color setting to set a body class, used for styling
  $('body').addClass(data.color);

  // Use the component name to select the correct content from maya_interviews.js.
  var component = eval(data.component_name);
  $.ajax({
    url: 'templates/video.handlebars',
    cache: true,
    success: function (source) {
      var template = Handlebars.compile(source);
      $('#container').html(template(component));
      video_kiosk();
    }
  });
});
