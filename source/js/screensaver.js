/**
 * screensaver.js
 * After 3 minutes of inactivity, show a full-screen video as a screensaver.
 * See http://stackoverflow.com/a/4029518
 */

$(function () {

  // Start the clock
  idleTime = 0;

  // Increment the idle time counter every minute.
  var idleInterval = setInterval('timerIncrement()', 60000); // 1 minute

  // Zero the idle timer on mouse movement.
  $(this).mousemove(function (e) {
    idleTime = 0;
  });
  $(this).keypress(function (e) {
    idleTime = 0;
  });

});

/**
 * Start the screensaver after 3 minutes of inactivity.
 */
function timerIncrement() {
  idleTime = idleTime + 1;
  var videoPlayer = _V_('videoPlayer');
  var playing = !videoPlayer.paused();

  // If it's been 3 minutes of inactivity, and a video's not playing, save the screen
  if ((idleTime > 2) && (!playing)) {

    // Get player and screensaver
    var videoPlayer = _V_('videoPlayer');
    var screensaver = $('video').attr('data-screensaver');

    // Fade out content
    $('#video-options, h1, h2').fadeOut('fast');

    // Show the video
    $('.hidden').not('#back').show().addClass('screensaver');

    // Change the source, change the size, start playback
    videoPlayer.src(screensaver).size(1366, 768).play();
    console.log('SCREENSAVERED!');

    wakeUp(); // Watch for mousemove, which will reset the page
  }
}

/**
 * Clear screensaver
 */
function wakeUp() {
  $('body').mousemove(function (e) {
    location.reload(); // Refresh the page
  });
}
