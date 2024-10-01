/**
 * Color variation
 * Simon Duchaine Morneau
 * 
 * This program represents a circle changing colors to find it's personality. 
 * Some of the most know colors/emotions are easy to access (Blue/sadness and Red/Anger) 
 * But some colors and emotions (Yellow/happiness and Teal/peace) are harder to find 
 * until you find the right patern.
 *
 */

"use strict";

let mouseXColor = undefined;

let mouseYColor = undefined;

let hypothenuse = undefined;

let diagonalsLength = undefined;

let mouseDiagonalColor = undefined;

let centerCanvas = undefined;

let circleSize = undefined;


/**
 * Creates a 1000 x 1000 Canvas to represnts our personality chaginig circle
*/
function setup() {
// Create the canvas

createCanvas(1000, 1000);

}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0);

   

//Call the function to draw the background

rotateBackground()


//creates a safe zone in the middle diagonal
if (mouseX < (mouseY + 50) && mouseX > (mouseY - 50) ) {

    //Draw a circle with z
tealCircle()

     }
else if (mouseY < (1050 - mouseX) && mouseY > (950 - mouseX)){
yellowCircle()
}
else {

blueAndRedCircle()
}

     
}
/** 
 * Create a function for a circle with fluctuing green
*/
function tealCircle() {

    //Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    mouseYColor = map(mouseY, 0, height, 0, 255);

    //Calculate the diagonal between mouseX and mouseY
    hypothenuse = sqrt(mouseX ** 2 + mouseY ** 2); 

    //Find the maximum diagonal's length
    diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Change diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    mouseDiagonalColor = map(hypothenuse, 0, diagonalsLength, 0, 255)  

    //Create a variable for the center of the canvas
    centerCanvas = mouseX-width/2;

    //Extend x's value to 1000
    circleSize = map(centerCanvas, 0, 500, 0, 1000);

    //Constrain the circle to the canvas's size
    circleSize = constrain(circleSize, -width, width)

    //Draw a circle at the mouse coordinates
    push();
    noStroke();
    //fill (red, green, blue)
    fill(0, mouseDiagonalColor, mouseYColor);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, circleSize);
    pop();
    
}

/** 
 * Create a function for a circle with no green
*/
function blueAndRedCircle() {
    
    //Change mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
    mouseXColor = map(mouseX, 0, width, 0, 255);

    //Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    mouseYColor = map(mouseY, 0, height, 0, 255);

    //Create a variable for the center of the canvas
    centerCanvas = mouseX-width/2;

    //Extend x's value to 1000
    circleSize = map(centerCanvas, 0, 500, 0, 1000);

    //Constrain the circle to the canvas's size
    circleSize = constrain(circleSize, -width, width)

    //Draw a circle without green
    push();
    noStroke();
    //fill (red, green, blue)
    fill(mouseXColor, 0, mouseYColor);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, circleSize);
    pop();

}
/** 
 * Create a function for a circle with fluctuing green
*/
function yellowCircle() {
   
    push();
    // Change the value of mouseX so that it can increase value while going to the left
    let newMouseX = mouseX - 1000

    //Calculate the diagonal between mouseX and mouseY
    hypothenuse = sqrt(newMouseX ** 2 + mouseY ** 2); 

   //Find the maximum diagonal's length
    diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Change diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    let mouseInvertedDiagonalColor = map(hypothenuse, 0, diagonalsLength, 0, 255)  

    //Create a variable for the center of the canvas
    centerCanvas = mouseX-width/2;

    //Extend x's value to 1000
    circleSize = map(centerCanvas, 0, 500, 0, 1000);

    //Constrain the circle to the canvas's size
    circleSize = constrain(circleSize, -width, width)

    //Draw a circle at the mouse coordinates
    push();
    noStroke();
    //fill (red, green, blue)
    fill(255, mouseInvertedDiagonalColor, 0);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, circleSize,);
    pop();
    pop();
}


function rotateBackground() {

    push();
    
    angleMode(DEGREES)

    let angle = map(mouseY, 0, width, 0, 360)

    translate(width/2, height/2)
    rotate(angle)

    

    // Draw a blue circle in the centre of the canvas
    push();
    noStroke();
    fill(0, 127.5, 127.5);
    ellipse(0, 0, 1000);
    pop();

    // Draw a orange ellipse at the center of the canvas 
    push();
    noStroke();
    fill(255, 127.5, 0);
    ellipse(0, 0, 25, 1000);
    pop();

    // Draw a another orange ellipse at the center of the canvas 
    push();
    noStroke();
    fill(255, 127.5, 0);
    ellipse(0, 0, 1000, 25);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(500, 500, 1000);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(-500, 500, 1000);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(500, -500, 1000);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(-500, -500, 1000);
    pop();

    
    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(250, 250, 500);
    pop();

    // Draw another black circle around
    push();
    noStroke();
    fill(0);
    ellipse(-250, 250, 500);
    pop();

    // Draw another black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(250, -250, 500);
    pop();

    // Draw another black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(-250, -250, 500);
    pop();

    // Draw an orange circle in the center
    push();
    noStroke();
    fill(255, 127.5, 0);
    ellipse(0, 0, 100);
    pop();

    // Draw a blue circle in the center
    push();
    noStroke();
    fill(0, 127.5, 127.5);
    ellipse(0, 0, 50);
    pop();

    pop();
}

    