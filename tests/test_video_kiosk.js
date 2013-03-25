/**
 * Unit tests, using qUnit - http://qunitjs.com/
 *
 * @TODO - Write some tests:
 *   1. Does the content load into the template?
 *   2. Does clicking a button play a video?
 *   3. Does clicking "Back" take you back? And stop/rewind the video?
 *   4. Does the screensaver start after 3 minutes?
 *   5. Does the page reload if you move the mouse when the screensaver's running?
*/

/**
 * Test: Check if content has been loaded into the template.
 */
test("template load", function() {
  var content = $('h1, h2, h3, h4, p').text();
  notEqual(content, '');
  // Check for empty h1, h2, h3, h4 and p tagis
  // Make sure image has src
  // Make sure video has src
});
