#!/bin/bash

aws s3 sync --delete --size-only . s3://parkcenterauto/ --exclude ".git/*" --exclude "*.DS_STORE*" --exclude ".idea/*"