/**
 * Indecisive Circle
 * Simon Duchaine Morneau
 * 
 * This program represents a circle changing size and colors depending on the mouse's position. 
 * Some of the most known colors are easy to access (Blue and Red) 
 * But some colors (Yellow and Teal) are harder to find 
 * until you discover the right patern.
 *
 */

"use strict";

//Naming all the variables I will use later on

let mouseXColor = undefined;

let mouseYColor = undefined;

let hypothenuse = undefined;

let diagonalsLength = undefined;

let mouseDiagonalColor = undefined;

let centerCanvas = undefined;

let circleSize = undefined;


/**
 * Creates a 1000 x 1000 Canvas to represent our personality changing circle
*/
function setup() {

    // Creates the canvas
 createCanvas(1000, 1000);

}


/**
 * Calls the background and sets a condotional to decide when to draw the teal, yellow or blue and red circle
*/
function draw() {

//Calls the function to draw the rotating background
rotatingBackground()


//Creates a safe zone in the middle diagonal
if (mouseX < (mouseY + 50) && mouseX > (mouseY - 50) ) {

    //Draws a teal circle
    tealCircle()

}
else if (mouseY < (1050 - mouseX) && mouseY > (950 - mouseX)){
    
    //Draws a yellow circle
    yellowCircle()
}
else {

    //Draws a blue and red circle
    blueAndRedCircle()
}

}

/** 
 * Creates a function for a circle with fluctuing blue (depending on mouseY) and green (depending on the mouse's diagonal position)
*/
function tealCircle() {

    //Changes mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    mouseYColor = map(mouseY, 0, height, 0, 255);

    //Calculates the diagonal between mouseX and mouseY
    hypothenuse = sqrt(mouseX ** 2 + mouseY ** 2); 

    //Finds the maximum diagonal's length
    diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Changes diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    mouseDiagonalColor = map(hypothenuse, 0, diagonalsLength, 0, 255)  

    //Creates a variable for the center of the canvas
    centerCanvas = mouseX-width/2;

    //Extends x's value to 1000
    circleSize = map(centerCanvas, 0, 500, 0, 1000);

    //Constrains the circle to the canvas's size
    circleSize = constrain(circleSize, -width, width)

    //Draws a circle at the mouse coordinates
    push();
    noStroke();
    //Fills (red, green, blue)
    fill(0, mouseDiagonalColor, mouseYColor);
    //Sets it in the middle of the canvas
    ellipse(width/2, height/2, circleSize);
    pop();
}

/** 
 * Creates a function for a circle with fluctuing blue (depending on mouseY) and red (depending on mouseX)
*/
function blueAndRedCircle() {
    
    //Changes mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
    mouseXColor = map(mouseX, 0, width, 0, 255);

    //Changes mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    mouseYColor = map(mouseY, 0, height, 0, 255);

    //Creates a variable for the center of the canvas
    centerCanvas = mouseX-width/2;

    //Extends x's value to 1000
    circleSize = map(centerCanvas, 0, 500, 0, 1000);

    //Constrains the circle to the canvas's size
    circleSize = constrain(circleSize, -width, width)

    //Draws a circle without green
    push();
    noStroke();
    //Fills (red, green, blue)
    fill(mouseXColor, 0, mouseYColor);
    //Sets it in the middle of the canvas
    ellipse(width/2, height/2, circleSize);
    pop();
}

/** 
 * Creates a function for a circle with fluctuing red (depending on mouseX) and green (depending on the mouse's inverted diagonal position)
*/
function yellowCircle() {
   
    push();
    //Changes the value of mouseX so that it can increase value while going to the left
    let newMouseX = mouseX - 1000

    //Calculates the diagonal between mouseX and mouseY
    hypothenuse = sqrt(newMouseX ** 2 + mouseY ** 2); 

    //Finds the maximum diagonal's length
    diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Changes diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    let mouseInvertedDiagonalColor = map(hypothenuse, 0, diagonalsLength, 0, 255)  

    //Creates a variable for the center of the canvas
    centerCanvas = mouseX-width/2;

    //Extend x's value to 1000
    circleSize = map(centerCanvas, 0, 500, 0, 1000);

    //Constrains the circle to the canvas's size
    circleSize = constrain(circleSize, -width, width)

    //Draws a circle at the mouse coordinates
    push();
    noStroke();
    //Fills (red, green, blue)
    fill(255, mouseInvertedDiagonalColor, 0);
    //Sets it in the middle of the canvas
    ellipse(width/2, height/2, circleSize,);
    pop();
    pop();
}

/**
 * Creates an appealing background motif that rotates depending on mouseY 
 */
function rotatingBackground() {

    push();
   
   angleMode(DEGREES);

   //Sets the origin to the center of the canvas
   translate(width/2, height/2)

    //maps the mouseY value to the rotating angle
    let angle = map(mouseY, 0, width, 0, 360);;

    //rotates the background
    rotate(angle);


    //Draws a black background
    background(0);

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
    pop()
}
    