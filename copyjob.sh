#!/bin/bash

###############################################################
#### **************** niklas-stephan.de ****************** ####
####  Refresh of Assets and Posts from SRC to DIST folder  ####
###############################################################

### Expected to be excuted inside ncms node-red container where
### /src and /dist are mapped volumes

# remove all current assets from dist, since we will get new ones
rm -R /dist/assets/
rm -R /dist/posts/
rm /dist/robots.txt

# create target directories in case they don't already exist
mkdir /dist/assets
mkdir /dist/posts

# copy new assets and robots
cp -R /src/assets/ /dist
cp /src/templates/robots.txt /dist/robots.txt

# copy current flows from node-red to src
cp -R /data/flows.json /dist/assets/json/flows.json