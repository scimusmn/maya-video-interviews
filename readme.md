# Maya Video Interviews

## Description
Template and HTML5 video playback for interview question (IQ) kiosks in the Maya exhibit.

## Dev setup
To compile the final content that will go on the exhibit kiosks you will need to setup some dependencies on your developer machine first. These steps are not required on the exhibit kiosks. We're assuming that your developer machine is OS X.

#### Install [Homebrew](http://mxcl.github.io/homebrew/)

    $ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"

#### Use Homebrew to install Node.js and NPM

    $ brew install node
    $ curl http://npmjs.org/install.sh | sh
    $ export NODE_PATH="/usr/local/lib/node"
    $ export PATH="/usr/local/share/npm/bin:$PATH"

Put those last two export commands in your bash or shell profile if you want them to work all the time.

#### Install [Grunt](http://http://gruntjs.com/getting-started)
Grunt is a task runner we use here to minify and concatenate JavaScript and CSS files after making any code changes. It can optionally be used here to optimize images.

Uninstall any previous versions of Grunt and then install the Grunt command line interface.

    $ npm uninstall -g grunt
    $ npm install -g grunt-cli

Note: Grunt 0.4.x requires Node.js version >= 0.8.0.

#### Install [Handlebars](http://handlebarsjs.com/precompilation.html)
Handlebars is a templating engine that allows us to write dynamic HTML5.

    $ npm install handlebars -g

#### Install the maya-video-interviews software

    $ cd ~/your_working_directory
    $ git clone git@github.com:scimusmn/maya-video-interviews.git
    
Since this project has already been configured with a `package.json` and a `Gruntfile`, you can quickly install all the dependencies for the project's Grunt tasks by running `npm install` from the project directory.

Test that your Grunt install works by running `grunt` and checking for errors.

## Compiling a kiosk
Once your development environment is set up, you're ready to compile a kiosk from the templates and the appropriate source material.

### Optimize images 
The image optimizer ([Smushit](http://www.smushit.com/ysmush.it/)) isn't part of the default Grunt build process since it takes awhile to run and is only useful if images have been updated. However, if an image has been changed or added, run the optimizer with this command: `grunt smushit`.

### Building the source material
Kiosks require several dynamic elements (images and video) depending on their content. These dynamic elements are specific to the IQ kiosks in the Maya exhibit. Here is a list of the appropriate kiosk names for these templates, with links to their corresponding media entries in Atrium.

* glyph_decipher - [0211 - Glyph decipherment](http://projects.smm.org/atrium/maya-project/node/281380)
* day_keepers - [0409 - Day Keepers](http://projects.smm.org/atrium/maya-project/node/281390)
* sites_today - [0515 - Sites Today](http://projects.smm.org/atrium/maya-project/node/281393)
* ballgame - [0604 Ballgame](http://projects.smm.org/atrium/maya-project/node/281395)
* human_remains - [0807 Human remains/burial](http://projects.smm.org/atrium/maya-project/node/281401)
* weaving - [1115 Weaving](http://projects.smm.org/atrium/maya-project/node/281406)
* agriculture - [1117 Maya agriculture](http://projects.smm.org/atrium/maya-project/node/281392)

You will use these kiosk names to create the source paths below.

#### Video selection buttons
Each video needs a selection button image. Each image should be 227px wide by 372px tall and in the PNG format with a transparent background.

There's a PSD for creating these on the SMM exhibit projects server: `/Volumes/ExhibitProjects/Projects/Maya/Multimedia/Templates/Interview questions/PSD/btn_images.psd`

These should be placed in:

    assets/images/kiosk_name/video#.png

Start numbering with zero, not 1 (video0.png, etc).

#### Video files
Each story should get a MP4 video file sized to 1200px wide by 520px tall. These should be placed in:

    assets/videos/kiosk_name/video#.mp4

#### Screensaver file
Each kiosk should get one screensaver MP4 video file sized to 1366px wide by 768px tall (fullscreen on the exhibit PCs). This should be placed in:

    assets/videos/kiosk_name/screensaver.mp4

### Compile
Once all of the source files are in place, you are ready to compile the kiosk files. This will precompile the handlebars templates, run the default Grunt tasks, create a config file, and export the whole package onto your Desktop.

Run install.sh with the component machine name as the argument, like this:

    $ ./install.sh kiosk_name

This will create a folder on your Desktop, which should be copied onto the Desktop of the exhibit kiosk PC.

## Note
The compiled files will not work in your normal web browser using the file protocol. To run them, you need to launch Chrome with the `--allow-file-access-from-files` flag.
This allows the application to read the config file. See http://www.chromium.org/developers/how-tos/run-chromium-with-flags

Alternatively, you could run the compiled files on a local webserver (http protocol).

On the kiosk, this is handled by running the these files within the [Stele system](https://github.com/scimusmn/stele).
