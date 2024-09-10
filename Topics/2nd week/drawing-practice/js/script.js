/**
 * Drawing practice
 * Simon Duchaine Morneau
 * 
 * Draws a purpple record on a gray background
 */

"use strict";

/**
 * Creates a Canvas
*/
function setup() {
//a nice square canvas
createCanvas(640, 640);
}


/**
 * Draws a purple record
*/
function draw() {
//a grey background
background(180);

//we push first to start the sequence
push();
//a purple circle with black outline in the middle of the canvas
fill('purple');
stroke(0);
ellipse(320, 320, 480);
//we pull at the end to reset the settings to default
pop();

// The label on the record
push();
fill(255, 255, 255);
noStroke();
ellipse(320, 320, 140, 140);
pop();

// The hole in the record
push();
fill(180);
stroke(50, 50, 50);
ellipse(320, 320, 20, 20);
pop();
}