#!/bin/bash

set -euo pipefail

convert -quality 95 -resize 900x900 original.jpg avatar.jpg

SIZE=115

for ((i=1;i<=4;i++)); do
  RESIZE=$(($SIZE*$i))
  convert -quality 95 -resize ${RESIZE}x${RESIZE} original.jpg avatar-${i}x.jpg
done
