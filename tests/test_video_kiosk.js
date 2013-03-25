/**
 * Unit tests, using qUnit - http://qunitjs.com/
 *
 * @TODO - Write some tests:
 *   - Does clicking a button play a video?
 *   - Does clicking "Back" take you back? And stop/rewind the video?
 *   - Does the screensaver start after 3 minutes?
 *   - Does the page reload if you move the mouse when the screensaver's running?
*/

/**
 * Test: Check if content has been loaded into the template.
 */
test("template load", function() {

  // Check for empty h1, h2, h3, h4 and p tags
  var content = $('h1, h2, h3, h4, p').text();
  notEqual(content, '');

  // Make sure image has src
  var image_source = [];
  $('img').each(function() {
    var source = $(this).attr('src');
    image_source.push(source);
  });
  var total_images = $('img').length();
  equal(total_images, image_source.length);

  // Make sure videos have srcs
  var video_source = [];
  $('video').each(function() {
    var source = $(this).attr('src');
    video_source.push(source);
  });
  var total_videos = $('video').length();
  equal(total_videos, video_source.length);

});
