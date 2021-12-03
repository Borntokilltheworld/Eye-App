lefteyeX = 0;
lefteyeY = 0;
righteyeX = 0;
righteyeY = 0;
function preload() {
left_eye= loadImage('https://i.postimg.cc/GpmDQLp4/lefteye-removebg-preview-1.png');
right_eye = loadImage('https://i.postimg.cc/59FdK8YV/righteye-removebg-preview.png')
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(left_eye,lefteyeX,lefteyeY,50,50)
image(right_eye,righteyeX,righteyeY,50,50)
}
function takeSnapshot(){
save('MyfilterImage');
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    lefteyeX = results[0].pose.leftEye.x-15;
    lefteyeY = results[0].pose.leftEye.y-15;
    righteyeX = results[0].pose.rightEye.x-15;
    righteyeY = results[0].pose.rightEye.y-15;
    console.log("lefteye x = "+lefteyeX);
    console.log("lefteye y = "+lefteyeY);
    console.log("righteye x = "+righteyeX);
    console.log("righteye y = "+righteyeY);
}

}
