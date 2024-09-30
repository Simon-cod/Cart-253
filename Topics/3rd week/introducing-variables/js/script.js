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

    background(0);

   

//Call the function to draw the background
drawBackground()

      

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
    let a = map(mouseX, 0, width, 0, 255, true);

    //Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    let b = map(mouseY, 0, height, 0, 255, true);

    //Calculate the diagonal between mouseX and mouseY
    let c = sqrt(mouseX ** 2 + mouseY ** 2); 

    //Find the maximum diagonal's length
    let diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Change diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    let z = map(c, 0, diagonalsLength, 0, 255, true)  
   
    //Create a variable for the center of the canvas
    let x = mouseX-width/2;

    //Extend x's value to 1000
    let xx = map(x, 0, 500, 0, 1000)

    // // Draw a circle at the mouse coordinates
    push();
    noStroke();
    //fill (red, green, blue)
    fill(0, z, b);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, xx);
    pop();
    console.log("a - " + a, "b - " + b, "z - " + z, "c - " + c)
}

/** 
 * Create a function for a circle with no green
*/
function CirclreWithoutZ() {
    
    //Change mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
let a = map(mouseX, 0, width, 0, 255, true);

//Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
let b = map(mouseY, 0, height, 0, 255, true);

//Create a variable for the center of the canvas
let x = mouseX-width/2;

//Extend x's value to 1000
let xx = map(x, 0, 500, 0, 1000)

    //Draw a circle without z
    push();
    noStroke();
    //fill (red, green, blue)
    fill(a, 0, b);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, xx);
    pop();
    console.log("a - " + a, "b - " + b)
}
/** 
 * Create a function for a circle with fluctuing green
*/
function CircleWithYellow() {
   
    // Change the value of mouseX so that it can increase value while going to the left
    let mx = mouseX - 1000

    //Change mouse X coordinate from between 0 andf the canvas's width to between 0 and 255
    let d = map(mouseX, width, 0, 0, 255, true);

    //Change mouse Y coordinate from between 0 and the canvas's height to between 0 and 255
    let e = map(mouseY, 0, height, 0, 255, true);

    //Calculate the diagonal between mouseX and mouseY
    let f = sqrt(mx ** 2 + mouseY ** 2); 

   //Find the maximum diagonal's length
    let diagonalsLength = sqrt(width ** 2 + height ** 2);

    //Change diagonal's mouse coordinate from between 0 and diagonalsLength to between 0 and 255
    let j = map(f, 0, diagonalsLength, 0, 255, true)  

    //Create a variable for the center of the canvas
    let x = mouseX-width/2;

    //Extend x's value to 1000
    let xx = map(x, 0, 500, 0, 1000)
   
    // // Draw a circle at the mouse coordinates
    push();
    noStroke();
    //fill (red, green, blue)
    fill(255, j, 0);
    //set it in the middle of the canvas
    ellipse(width/2, height/2, xx);
    pop();
    console.log("d - " + d, "e - " + e, "j - " + j, "f - " + f)
}

function drawBackground() {
    
    

    // Draw a blue circle in the centre of the canvas
    push();
    noStroke();
    fill(0, 127.5, 127.5);
    ellipse(width/2, height/2, 1000);
    pop();

    // Draw a orange ellipse at the center of the canvas 
     push();
     noStroke();
     fill(255, 127.5, 0);
     ellipse(width/2, height/2, 25, 1000);
     pop();

    // Draw a another orange ellipse at the center of the canvas 
     push();
     noStroke();
     fill(255, 127.5, 0);
     ellipse(width/2, height/2, 1000, 25);
     pop();

      // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(1000, 1000, 1000);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(0, 1000, 1000);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(1000, 0, 1000);
    pop();

    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(0, 0, 1000);
    pop();

    
    // Draw a black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(750, 750, 500);
    pop();
    
     // Draw another black circle around
     push();
     noStroke();
     fill(0);
     ellipse(250, 750, 500);
     pop();

      // Draw another black circle around 
    push();
    noStroke();
    fill(0);
    ellipse(750, 250, 500);
    pop();

     // Draw another black circle around 
     push();
     noStroke();
     fill(0);
     ellipse(250, 250, 500);
     pop();

      // Draw an orange circle in the center
      push();
      noStroke();
      fill(255, 127.5, 0);
      ellipse(width/2, height/2, 100);
      pop();

      // Draw a blue circle in the center
      push();
      noStroke();
      fill(0, 127.5, 127.5);
      ellipse(width/2, height/2, 50);
      pop();
      
}

function drawBlackCircles() {

    // // Draw a blue circle in the centre of the canvas
    //  push();
    //  noStroke();
    //  fill(0, 127.5, 127.5);
    //  ellipse(width/2, height/2, 1500);
    //  pop();
    
     // Draw a blue circle in the centre of the canvas
     push();
     noStroke();
     fill(0);
     ellipse(width/2, 0, 500);
     pop();
    
     // Draw a blue circle in the centre of the canvas
     push();
     noStroke();
     fill(0);
     ellipse(width/2, height, 500);
     pop();
    
     // Draw a blue circle in the centre of the canvas
     push();
     noStroke();
     fill(0);
     ellipse(0, height/2, 500);
     pop();
    
     // Draw a blue circle in the centre of the canvas
     push();
     noStroke();
     fill(0);
     ellipse(width, height/2, 500);
     pop();
    
          }
    