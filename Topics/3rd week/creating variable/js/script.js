/**
 * Creating variables
 * Simon Duchaine Morneau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Our cheese colour broken into RGB
let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

// Our cheese hole
let holeShade = 0; // Greyscale value for the hole
let holeX = 140; // x-coordinate of the hole
let holeY = 175; // y-coordinate of the hole
let holeSize = 180; // Diameter of the hole

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(480, 480);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

// Cheese colour (yellow)
background(cheeseRed, cheeseGreen, cheeseBlue);
    
// Draw a hole in the upper left
push();
noStroke();
fill(holeShade);
// When we only provide a width argument we get a circle
// with that diameter
// https://p5js.org/reference/p5/ellipse/
ellipse(holeX, holeY, holeSize);
pop();
}