nose_x = 0
nose_y = 0 
difference = 0
rightwrist_x = 0
leftwrist_x = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550,500)
    canvas = createCanvas(550, 550)
    canvas.position(580, 150)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose',gotposes)
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        leftwrist_x = results[0].pose.leftWrist.x
        rightwrist_x = results[0].pose.rightWrist.x
        difference = floor(leftwrist_x - rightwrist_x)
    }
}

function modelloaded() {
    console.log("PoseNet is Loaded")
}

function draw() {
    background("#39e3bb")
    fill("#8322f2")
    stroke("#2522f2")
    square(nose_x, nose_y, difference)
    document.getElementById("square_size").innerHTML = "Width & Height of the square will be = " + difference + "px"
}
