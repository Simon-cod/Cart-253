/**
 * Challenges
 * Simon Duchaine Morneau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 *Drawing a canvas
*/
function setup() {
createCanvas (400, 400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//sets a light blue/purple background
background (100, 150, 255);


//creates a white rectangle
push ();
noStroke ();
rect(35, 80, 330, 240);
pop ();

//creates the green part of the flag
push ();
fill(0, 150, 0)
noStroke ();
rect(35, 80, 110, 240);
pop ();

//creates the red part of the flag
push ();
fill(220, 0, 0);
noStroke ();
rect(255, 80, 110, 240);
pop ();
}