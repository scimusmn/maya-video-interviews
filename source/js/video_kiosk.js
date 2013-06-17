/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/
function video_kiosk() {

  var $videoOption = $('.video-button'),
      videoPlayer = _V_('videoPlayer'),
      // Path is relative to index.html
      videoPath = '../assets/videos/';

  // Unbind video.js default behavior of rewinding the video when it ends
  // We're providing our own "ended" event.
  videoPlayer.removeEvent('ended', videoPlayer.onEnded);
  videoPlayer.removeEvent('ended', function() {
    if (this.options.loop) {
      this.currentTime(0);
      this.play();
    } else {
      this.pause();
    }
  });

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

    // When the video ends, go back to the start page
    this.addEvent('ended', function(){
      restartKiosk(this);
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
  $('.hidden').fadeOut('fast', function() {
    videoPlayer.pause();
    $('#video-options').fadeIn('fast', function() {
      videoPlayer.currentTime('0'); // Be kind, rewind
    });
  });
}
