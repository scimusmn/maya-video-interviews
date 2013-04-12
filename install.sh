#! /bin/bash

echo "Creating directory structure for $1..."
mkdir ~/Desktop/maya_IQ_$1
mkdir ~/Desktop/maya_IQ_$1/build
mkdir ~/Desktop/maya_IQ_$1/assets
mkdir ~/Desktop/maya_IQ_$1/assets/images
mkdir ~/Desktop/maya_IQ_$1/assets/videos
mkdir ~/Desktop/maya_IQ_$1/assets/images/$1
mkdir ~/Desktop/maya_IQ_$1/assets/videos/$1
mkdir ~/Desktop/maya_IQ_$1/assets/template
cp -r build/* ~/Desktop/maya_IQ_$1/build
echo

echo "Exporting assets for $1..."
cp -r assets/images/$1/* ~/Desktop/maya_IQ_$1/assets/images/$1/
cp -r assets/videos/$1/* ~/Desktop/maya_IQ_$1/assets/videos/$1/
cp -r assets/template/* ~/Desktop/maya_IQ_$1/assets/template/
echo

echo "Writing config file..."
mkdir ~/Desktop/maya_IQ_$1/config
touch ~/Desktop/maya_IQ_$1/config/config.json
echo "{ \"component_name\": \"$1\" }" > ~/Desktop/maya_IQ_$1/config/config.json

echo "[Done]"
echo
