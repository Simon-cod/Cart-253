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

let segments = []

let direction = "none"

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 75,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: 75,
        y: 480,
        size: 20,
        speed: 5,
        // Determines how the tongue moves each frame
        state: "idle", // State can be: idle, outbound, inbound
        direction: "none",
        head: {
            x: 75,
            y: 565
        },
    }
};
console.log(frog.tongue.head.x)
// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

function draw() {
    background("#87ceeb");
    moveFly();
    drawFly();
    // moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    tongueSegments()
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
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
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
// function moveFrog() {
//     frog.body.x = mouseX;
// }

/**
 * Handles moving the tongue based on its state
 */
// function moveTongue() {
//     // Tongue matches the frog's x
//     frog.tongue.x = frog.body.x;
//     // If the tongue is idle, it doesn't do anything
    
//     // If the tongue is outbound, it moves up
//     if (frog.tongue.direction === "none") {
//         //Do nothing
//     }
//     else if (frog.tongue.direction === "up") {
//         frog.tongue.y += -frog.tongue.speed;
//     }
//     else if (frog.tongue.direction === "right") {
//         frog.tongue.x += frog.tongue.speed;
//     }

//     if (frog.tongue.state === "idle") {
//             // Do nothing
//         }
//         // The tongue bounces back if it hits the top
//         else if (frog.tongue.y <= 0) {
//             frog.tongue.state = "inbound";
        
//         }
//     // If the tongue is inbound, it moves down
//     else if (frog.tongue.state === "inbound") {
//         frog.tongue.y += frog.tongue.speed;
//         // The tongue stops if it hits the bottom
//         if (frog.tongue.y >= height) {
//             frog.tongue.state = "idle";
//         }
//     }
// }

/**
 * Creates an Array for the tongue
 */
function tongueSegments() {

    //apply the speed to the tongue's head
for (let tongueHeadX = frog.tongue.head.x; tongueHeadX > 800; tongueHeadX += frog.tongue.speed) {

//create a vector with the moving tongue head and the tongue y (NOT DRAWN YET)
let segmentPosition = createVector(tongueHeadX, frog.tongue.head.y);

// add it to the beginning of the array
segments.unshift(segmentPosition);

}
// console.log(tongueHeadX)
}




/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
     // Draw the tongue segments
     push();
     fill("#ff0000");
     noStroke();
     for (let segment of segments)
     vertex(frog.tongue.head.x, frog.tongue.head.y, frog.tongue.size);

     pop();
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.head.x, frog.tongue.head.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.head.x, frog.tongue.head.y, frog.body.x, (frog.body.y - frog.body.size/2) );
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

// function drawFrog() {
//     // Draw the tongue tip
//     push();
//     fill("#ff0000");
//     noStroke();
//     ellipse(frog.tongue.head.x, frog.tongue.head.y, frog.tongue.size);
//     pop();

//     // Draw the rest of the tongue
//     push();
//     stroke("#ff0000");
//     strokeWeight(frog.tongue.size);
//     line(frog.tongue.head.x, frog.tongue.head.y, frog.body.x, (frog.body.y - frog.body.size/2) );
//     pop();

//     // Draw the frog's body
//     push();
//     fill("#00ff00");
//     noStroke();
//     ellipse(frog.body.x, frog.body.y, frog.body.size);
//     pop();
// }
console.log(segments[0])
function moveTongue() {
    
    //copy the first pixel of the snake to the tongueHead variables
    let tongueHead = segments[0];

    //inserts the new tongueHead at the beginning of the segments array
    segments.unshift(tongueHead);

    // If the tongue direction is none, it doesn't do anything
    if (frog.tongue.direction === "none") {
        // Tongue matches the frog's x
    frog.tongue.head.x = frog.body.x;
    frog.tongue.head.y = 565;
    }
    else if (frog.tongue.direction === "up") {
        tongueHead.y -= frog.tongue.speed;
    }
    else if (frog.tongue.direction === "right") {
        tongueHead.x += frog.tongue.speed;
    }
    else if (frog.tongue.direction === "left") {
        tongueHead.x -= frog.tongue.speed 
    }
    else if (frog.tongue.direction === "down") {
        tongueHead.y += frog.tongue.speed
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
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
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
 * Launch the tongue on click (if it's not launched yet)
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
  } else if (keyCode === 32) {
    frog.tongue.direction = "none"
  }
}

console.log(frog.tongue.state, frog.tongue.direction)