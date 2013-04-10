# Media assets 

Images for the video buttons and the actual video files should go into this directory.
The root .gitignore file will keep them from being committed to the code repository.

## Directory structure

The assets folder should include two subfolders, one for video and one for images.
Within those folders, create a folder for each component. 
Use the same name as what's set in the config file and content variable.

Like this:

- Assets
  - video
      - sites_today
      - weaving
      - (etc)
  - images
      - sites_today
      - weaving
      - (etc)

Check out the sites_today directories as an example - we don't have content for the others yet.

## File specs 

- Video files should be in mp4 format and sized to 1200 x 520px.
- Image files for the buttons should be 227 x 372px PNGs in the shape of the buttons.
 - Use this PSD to create those: 
 /Volumes/ExhibitProjects/Projects/Maya/Multimedia/Templates/Interview questions/PSD/btn_images.psd
 - Button background images come from btn_bg.psd in the same folder as the other one, 
 but those should go into assets/template and be committed in this repo since they're referenced in the CSS file.
- Videos should be named video0.mp4, video1.mp4, etc. Image names should match their associated video, but with the PNG extension 
(i.e. video0.png, video1.png, etc).
