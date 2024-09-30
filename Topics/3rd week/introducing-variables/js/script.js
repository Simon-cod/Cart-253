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
createCanvas(1000, 1000);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(width/2, height/2, 100, 100);
    pop();

     // Draw a smaller circle at the center of the canvas 
     push();
     noStroke();
     fill(255, 150, 0);
     ellipse(width/2, height/2, 50, 100);
     pop();



//creates a safe zone in the middle diagonal
if (mouseX < (mouseY + 50) && mouseX > (mouseY - 50) ) {

    //Draw a circle with z
CircleWithZ()

     }
else if (mouseY < (1050 - mouseX) && mouseY > (950 - mouseX)){
CircleWithYellow()
}
else {

CirclreWithoutZ()
}

     
}
/** 
 * Create a function for a circle with fluctuing green
*/
function CircleWithZ() {
   
    //Change mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
    let a = map(mouseX, 0, width, 0, 255);

    //Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    let b = map(mouseY, 0, height, 0, 255);

    //Calculate the diagonal between mouseX and mouseY
    let c = sqrt(mouseX ** 2 + mouseY ** 2); 

 //  //Find the maximum diagonal's length
 let diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Change diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    let z = map(c, 0, diagonalsLength, 0, 255)  
   
    // // Draw a circle at the mouse coordinates
    push();
    noStroke();
    //fill (red, green, blue)
    fill(0, z, b);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, mouseX-width/2, mouseX-width/2);
    pop();
    console.log("a - " + a, "b - " + b, "z - " + z, "c - " + c)
}

/** 
 * Create a function for a circle with no green
*/
function CirclreWithoutZ() {
    
    //Change mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
let a = map(mouseX, 0, width, 0, 255);

//Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
let b = map(mouseY, 0, height, 0, 255);

    //Draw a circle without z
    push();
    noStroke();
    //fill (red, green, blue)
    fill(a, 0, b);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, mouseX-width/2, mouseX-width/2);
    pop();
    console.log("a - " + a, "b - " + b)
}
/** 
 * Create a function for a circle with fluctuing green
*/
function CircleWithYellow() {
   
    // Change the value of mouseX so that it can increase value while going to the left
    let x = mouseX - 1000
    
    //Change mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
    let d = map(mouseX, width, 0, 0, 255);

    //Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    let e = map(mouseY, 0, height, 0, 255);

    //Calculate the diagonal between mouseX and mouseY
    let f = sqrt(x ** 2 + mouseY ** 2); 

 //  //Find the maximum diagonal's length
 let diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Change diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    let j = map(f, 0, diagonalsLength, 0, 255)  
   
    // // Draw a circle at the mouse coordinates
    push();
    noStroke();
    //fill (red, green, blue)
    fill(e, j, 0);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, mouseX-width/2, mouseX-width/2);
    pop();
    console.log("d - " + d, "e - " + e, "j - " + j, "f - " + f)
}
