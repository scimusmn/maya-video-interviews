/**
 * Initialize the kiosk start page.
 * - Load and read the config file.
 * - Load precompiled handlebars template.
 * - Load video playback behaviors from video_kiosk.js.
 */

var kiosk_init = function() {

  // Path to the config file
  var config = '../config/config.json';

  // Read the config file
  $.getJSON(config, function(data) {

    // Set a body class with the component name
    $('body').addClass(data.component_name);

    // Load the component's content from maya_interviews.js
    // Load the precompiled template, and output these into #container
    var component = eval(data.component_name),
        template = Handlebars.templates['video'],
        html = template(component);
    $('#container').html(html);

    // Video behaviors
    video_kiosk();

  });

}
