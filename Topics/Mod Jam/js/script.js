/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";



//?Creates a variable for the tongue's direction
let direction = "none"

//?Creates a variable for the tongue Head x & y coordinates
let tongueHeadCoordinates

//?Create a variable to change the tongue Origin (define later)
let changedTongueOrigin


// ?Our frog
let frog = {
    // The frog's body has a position and size
    body: {
        x: 300,
        y: 1800,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: 300,
        y: 1800,
        size: 20,
        speed: 4,
        // Determines how the tongue moves each frame
        state: "idle", // State can be: idle, outbound, inbound
        stateSpeed: "normal", //stateSpeed can be normal & fast
        direction: "none", //Direction can be: none, up, down, left, right
       //Specifies the tongue's head coordinatesy
        head: {
            x: 75,
            y: 565
        },
    }
}

console.log(frog.tongue.head.x)
// ?Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

/**
 * ?Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(600, 2000);

    // Give the fly its first random position
    resetFly();
    //Creates a vector with the tongue head coordinates
    tongueHeadCoordinates = createVector(frog.tongue.head.x, frog.tongue.head.y);
    console.log(tongueHeadCoordinates)

    //Creates a vector with the tongue origins (that will be changing)
    changedTongueOrigin = createVector(frog.body.x, (frog.body.y - frog.body.size/2))
    
}

/**
 * ?Draws the frog, move it's tongue and moves the fly
 */
function draw() {
    background("#87ceeb");
    moveFly();
    drawFly();
    // moveFrog();
    moveTongue();
    drawTongue();
    drawFrog();
    checkTongueFlyOverlap();
    // tongueSegments()
    console.log(tongueHeadCoordinates.x)
}

/**
 * !Moves the fly according to its speed
 * !Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * TODO Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * !Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(200, 300);
}



/**
 * ?Draws the tongue as a vector
 */
function drawTongue() {
//Draws the tongue vector
    push();
     stroke(150, 0, 250);
     strokeWeight(frog.tongue.size)
     point(tongueHeadCoordinates)
     pop();

   // Draw the body of the tongue (that follows the tongue's)
    push();
    stroke(150, 50, 250);
    strokeWeight(frog.tongue.size);
    line(tongueHeadCoordinates.x, tongueHeadCoordinates.y, changedTongueOrigin.x, changedTongueOrigin.y);
    pop();
    console.log("Head Coordinates =" + tongueHeadCoordinates, "Origins =" + changedTongueOrigin)
}


/**
 * ?Displays the frog (body)
 */
function drawFrog() {

    // Draw the frog's body
    push();
    fill(50, 150, 250);
    stroke(0, 0, 200);
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();

    //Draw spots
    push();
    fill(0, 0, 200);
    noStroke();
    ellipse(frog.body.x - 45, frog.body.y, 60);
    pop();

    push();
    fill(0, 0, 200);
    noStroke();
    ellipse(frog.body.x + 30, frog.body.y - 35, 60);
    pop();

    push();
    fill(0, 0, 200);
    noStroke();
    ellipse(frog.body.x - 20, frog.body.y - 45, 30);
    pop();
    
    push();
    fill(0, 0, 200);
    noStroke();
    ellipse(frog.body.x + 10, frog.body.y + 20, 30);
    pop();

    push();
    fill(0, 0, 200);
    noStroke();
    ellipse(frog.body.x + 60, frog.body.y + 2, 20);
    pop();
}

/**
 * ?Moves the tongue with the keypad
 */
function moveTongue() {
    
    if (frog.tongue.stateSpeed === "fast") {
        frog.tongue.speed = 10;
    } 
    else {
        frog.tongue.speed = 4;
    }

    // If the tongue direction is none, it doesn't do anything
    if (frog.tongue.direction === "none") {
        // Tongue matches the frog's x
        tongueHeadCoordinates.x = frog.body.x;
    tongueHeadCoordinates.y = (frog.body.y - frog.body.size/2);
    }
    else if (frog.tongue.direction === "up") {

       //removes a y value so it goes up
        tongueHeadCoordinates.y -= frog.tongue.speed;
    }
    else if (frog.tongue.direction === "right") {
       
        tongueHeadCoordinates.x += frog.tongue.speed;

    }
    else if (frog.tongue.direction === "left") {
        tongueHeadCoordinates.x -= frog.tongue.speed 
    }
    else if (frog.tongue.direction === "down") {
        tongueHeadCoordinates.y += frog.tongue.speed
    }

    if (frog.tongue.state === "idle") {
            // Do nothing
        }
        // The tongue bounces back if it hits the top
        else if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        
        }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}


/**
 * !Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);

    // console.log("d" + d)
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        // frog.tongue.state = "inbound";
    }
}

/**
 * ? Changes tongue state when you press on the keypad
 */
function keyPressed() {
    // if (frog.tongue.state === "idle") {
    //     frog.tongue.state = "outbound";
    if (keyCode === UP_ARROW) {
        frog.tongue.direction = "up"; //moves 0 along x and -1 (up) along y axis
  } else if (keyCode === DOWN_ARROW) {
    frog.tongue.direction = "down";
  } else if (keyCode === RIGHT_ARROW) {
    frog.tongue.direction = "right";
  } else if (keyCode === LEFT_ARROW) {
    frog.tongue.direction = "left"
  } //Resets the direction to none if spacebar is pressed
  else if (keyCode === 32) {
    frog.tongue.direction = "none"
  } //Changes the tongue speed to fast when the shift key is pressed
  else if (keyCode === 16) {
    frog.tongue.stateSpeed = "fast"
  } 
}

/**
 * ? Removes the speed effect when you release the shift key
 */
function keyReleased() {
    if (keyCode === 16) {
    frog.tongue.stateSpeed = "normal"
}
}
