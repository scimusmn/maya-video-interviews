/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/

function video_kiosk() {

  // Set some variables, we'll use these a bunch
  var $videoOption = $('#video-options div'),
      videoPlayer = _V_('videoPlayer'),
      // Path is relative to the kiosk page
      videoPath = 'media/video/';

  $videoOption.eq(0).addClass('selected'); // Select the first video initially

  // Initialize the videojs plugin.
  videoPlayer.ready(function() {

    // Show play button on pause
    this.addEvent("pause", function() {
      $('.vjs-big-play-button').css('visibility','visible').show();
    });

    // Reset poster image when video ends
    this.addEvent("ended", function() {
      this.posterImage.show();
    });

    // Toggle main video by clicking on its title or poster image
    $videoOption.click(function() {
      var id = $(this).attr('id').match(/\d+/),
          video = $(this).attr('data-video-source'),
          poster = $('img', this).attr('src'),

      // Change the video source and poster attributes
      if (!$(this).hasClass('selected')) {
        videoPlayer.src(videoPath + video);
        $('.vjs-poster').attr('src', poster);

        // Be kind, rewind
        videoPlayer.currentTime("0").posterImage.show();
        $('.vjs-big-play-button').css('visibility','visible').show();

      }
    });

  });

};


