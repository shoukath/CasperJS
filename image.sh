date1=`date +"%G%m%d%H%M%S"`.jpg
fswebcam  -i 0 -d v4l2:/dev/video0  --jpeg 95  --save $date1 -S 20 -r 640x480
~/shoukath/dropbox_uploader.sh upload $date1 $date1
rm $date1
