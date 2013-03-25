/**
 * Test: Check config file
 */
test("kiosk init", function() {
  expect(3);

  // Check config file contents
  var url = '../config/config.json';
  stop();
  $.getJSON(url, function(data) {
    ok(data, 'Data is returned from the server'); // Data exists
    ok(data.color, 'Color: ' + data.color); // Color parameter exists
    ok(data.component_name, 'Component: ' + data.component_name); // Component name exists
    start();
  });

});

/**
 * Test: Check for content
 */
test("content", function() {

 // expect();


});
