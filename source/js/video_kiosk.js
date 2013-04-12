/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/
function video_kiosk() {

  // Set some variables, we'll use these a bunch
  var $videoOption = $('.video-button'),
      videoPlayer = _V_('videoPlayer'),
      // Path is relative to the kiosk page
      videoPath = '../assets/video/';

  // Initialize the videojs plugin.
  videoPlayer.ready(function() {

    // Set the video source when one is selected
    $videoOption.click(function() {
      var video = $(this).attr('data-video-source');

      // Change the video source
      videoPlayer.src(videoPath + video);

      // Custom hide/show actions for the Maya design
      maya_player(videoPlayer);

    });

  });

};

/*
 * Hide the buttons and show the video player when one's selected.
*/
var maya_player = function(videoPlayer) {
  // Fade the buttons out; fade the player/back btn in; play the video
  $('#video-options').fadeOut(500, function() {
    $('.hidden').fadeIn('fast', function() {
      videoPlayer.play();
    });
  });

  // Back button returns you to the video options and stops the video
  $('#back').click(function() {
    restartKiosk(videoPlayer);
  });

}

/**
 * Restart the kiosk:
 * Pause and rewind the video, return to the start page
 */
var restartKiosk = function(videoPlayer) {
  $('.hidden').fadeOut(500, function() {
    videoPlayer.pause();
    videoPlayer.currentTime('0'); // Be kind, rewind
    $('#video-options').fadeIn('fast');
  });
}
