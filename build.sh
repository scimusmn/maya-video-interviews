#! /bin/bash

echo "Compiling templates..."
handlebars source/templates/videos.handlebars -f build/templates/videos.handlebars.js
echo

echo "Running Grunt tasks..."
echo
grunt
echo

echo "[Done]"
echo

