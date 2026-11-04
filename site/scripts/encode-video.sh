#!/usr/bin/env bash
# Encode a downloaded master video into the web-optimised files the site serves from public/video/.
#
#   scripts/encode-video.sh wall  <src.mp4> <id>   -> public/video/wall/<id>-360.mp4 (landscape: -854.mp4)
#       muted 15s loop, H.264 main, CRF 28, faststart, ~0.3-1.8 MB. Used by the hero video wall.
#   scripts/encode-video.sh cuts  <src.mp4> <id>   -> public/video/cuts/<id>-540.mp4 (landscape: -960.mp4)
#       full length with AAC 96k audio (the player has an unmute button), H.264 main, CRF 27.
#
# Masters are not committed. They came from the Cinebody Vimeo account at the best rendition
# (1080x1920 for most, 4K for two). WebM/VP9 was tried and came out ~40% LARGER than the
# H.264 files at equal quality, so it is not shipped. Keep any single file under ~10 MB; above
# that, move it to Vercel Blob instead of committing it.
set -euo pipefail
kind=$1; src=$2; id=$3
root=$(cd "$(dirname "$0")/.." && pwd)
read -r w h < <(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=' ' "$src")
case $kind in
  wall)
    if [ "$w" -gt "$h" ]; then s=854; else s=360; fi
    mkdir -p "$root/public/video/wall"
    ffmpeg -y -v error -i "$src" -t 15 -an -vf "scale=$s:-2,fps=fps=30:round=down" \
      -c:v libx264 -preset slow -crf 28 -profile:v main -pix_fmt yuv420p -movflags +faststart \
      "$root/public/video/wall/$id-$s.mp4" ;;
  cuts)
    if [ "$w" -gt "$h" ]; then s=960; else s=540; fi
    mkdir -p "$root/public/video/cuts"
    ffmpeg -y -v error -i "$src" -vf "scale=$s:-2" -r 30 \
      -c:v libx264 -preset slow -crf 27 -profile:v main -pix_fmt yuv420p \
      -c:a aac -b:a 96k -ac 2 -movflags +faststart \
      "$root/public/video/cuts/$id-$s.mp4" ;;
  *) echo "kind must be wall or cuts" >&2; exit 1 ;;
esac
