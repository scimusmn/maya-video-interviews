# Maya Video Interviews 

## Description 
Template and HTML5 video playback for interview question (IQ) kiosks in the Maya exhibit.

## Install
No special instructions yet.

## Development/Build Process
- Make changes in the "source" directory.
- To create a new build:
 - Precompile the Handlebars template: handlebars source/templates/videos.handlebars -f build/templates/videos.handlebars.js 
 - Minify JS and CSS using Grunt: grunt

## Roadmap
- ~~Develop a config file to set the kiosk's color scheme and content.~~
- ~~Develop screensaver functionality.~~
- ~~Develop some unit tests, possibly using http://qunitjs.com/~~
- Fill in actual text content (English and Spanish).
- ~~Get other color options~~ and possibly adjust colors to match physical objects.
- Look into Selenium scripts for more tests.
- Set up Grunt.js for deploying to kiosks, something like:
 - precompile Handlebars templates
 - ~~minify code~~
 - run tests
