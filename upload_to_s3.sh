#!/bin/bash

# Compress images - uncomment to run
#find ./images/ -type f -iname '*.jpg'  -exec jpegoptim --strip-com --max=85 {} \;
#find ./images/ -type f -iname '*.JPG'  -exec jpegoptim --strip-com --max=85 {} \;
#find ./images/ -type f -iname '*.jpeg'  -exec jpegoptim --strip-com --max=85 {} \;
#find ./images/ -type f -iname '*.png'  -print0 | xargs -0 optipng -o7

# Upload to S3
aws s3 sync --delete --size-only . s3://parkcenterauto/ --exclude ".git/*" --exclude "*.DS_STORE*" --exclude ".idea/*"