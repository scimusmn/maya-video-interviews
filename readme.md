# Maya Video Interviews 

## Description 
Template and HTML5 video playback for interview question (IQ) kiosks in the Maya exhibit.

## Install
Run install.sh with the component machine name as the argument, like this:
``` ./install.sh weaving ```

This will create a folder on your desktop, which can be copied onto the kiosk PC.

Component machine names:

- glyph_decipher
- day_keepers
- sites_today
- ballgame
- weaving
- agriculture
- human_remains

## Development/Build Process
- Make changes in the "source" directory.
- Create a new build by running build.sh, which will precompile the handlebars templates and run all the Grunt tasks.

### Dev Dependencies 
To execute the build process, you'll need to install Grunt, Handlebars, node and npm.

- Grunt: http://http://gruntjs.com/getting-started
- Handlebars: http://handlebarsjs.com/precompilation.html
- Node and npm are pretty easy to install using Homebrew (http://mxcl.github.io/homebrew/).

## Roadmap
- Get feedback from SMM staff
- Content edits (text, videos and images)
