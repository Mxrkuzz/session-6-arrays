let spotSize = [100, 300, 75, 250]; // an array
let spotIndex = 0; // a variable

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(400, 400, spotSize[spotIndex], spotSize[spotIndex]); //spotSize determiner, 
    console.log(spotIndex);
}

function mousePressed(){
    if (spotIndex  == spotSize.length-1) {
        spotIndex = 0;
    }   else {
        spotIndex = spotIndex + 1; //adds one everytime you press your mouse, choosing the next element in the array
    }

}