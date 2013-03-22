/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/
function video_kiosk() {

  // Set some variables, we'll use these a bunch
  var $videoOption = $('.video-button'),
      videoPlayer = _V_('videoPlayer'),
      // Path is relative to the kiosk page
      videoPath = 'media/video/';

  // Initialize the videojs plugin.
  videoPlayer.ready(function() {

    // Show play button on pause
    this.addEvent("pause", function() {
      $('.vjs-big-play-button').css('visibility','visible').show();
    });

    // Toggle main video by clicking on its title or poster image
    $videoOption.click(function() {
      var video = $(this).attr('data-video-source');

      // Change the video source
      videoPlayer.src(videoPath + video);

      // Be kind, rewind
      videoPlayer.currentTime("0").posterImage.show();
      $('.vjs-big-play-button').css('visibility','visible').show();

    });

  });

};


