/**
 * Introducing variables
 * Simon Duchaine Morneau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
// Create the canvas
createCanvas(1920, 1000);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    // If we set the ellipse's (x,y) coordinates to
    // *half* the width and *half* the height, it will
    // always end up in the centre of our canvas.
    // That's math, baby! / means division
    ellipse(width/2, height/2, 100, 100);
    pop();

     // Draw a smaller circle
     push();
     noStroke();
     fill(255, 150, 0);
     // We use the variable names mouseX and mouseY instead
     // of numbers for the x and y coordinates of our circle
     // JavaScript will *use the values inside them* (the numbers)
     // to send as the x and y arguments of ellipse()
     // And that will mean the ellipse will be drawn with its (x, y)
     // position set to the current mouse (x, y) position.
     ellipse(width/2, height/2, 50, 100);
     pop();
     
     // Draw a circle at the mouse coordinates
     push();
     noStroke();
     fill(mouseX, mouseY, mouseX);
     // We use the variable names mouseX and mouseY instead
     // of numbers for the x and y coordinates of our circle
     // JavaScript will *use the values inside them* (the numbers)
     // to send as the x and y arguments of ellipse()
     // And that will mean the ellipse will be drawn with its (x, y)
     // position set to the current mouse (x, y) position.
     ellipse(width/2, height/2, mouseX-width/2, mouseX-width/2);
     pop();
}