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
let direction = "none";

//?Creates a variable for the tongue Head x & y coordinates
let tongueHeadCoordinates;

//?Create a variable to change the tongue Origin (define later)
let changedTongueOrigin;


// ?Our frog
let frog = {
    // The frog's body has a position and size
    body: {
        x: 300,
        y: 1600,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: 300,
        y: 1624,
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
// TODO Our initial fly
// Has a position, size, and speed of horizontal movement
//Creates coordinate for the inital fly that will always reset
const initialFly = {
    // x: 0,
    x: 0,
    y: 200, // Will be random
    size: 15,
    speed: 3
};

// TODO creates a variable for the borders
let border = undefined

// TODO Creates an empty array for the buggyFlies
let buggyFlies = []

/**
 * ?Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(600, 1624);

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
    moveTongue();
    drawTongue();
    drawFrog();
    checkTongueFlyOverlap();
    drawsNewCrazyFly()
    
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
    // console.log("Head Coordinates =" + tongueHeadCoordinates, "Origins =" + changedTongueOrigin)
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
        else if (frog.tongue.direction === "right" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
       
        tongueHeadCoordinates.x += frog.tongue.speed;

        }
        else if (frog.tongue.direction === "left" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
        tongueHeadCoordinates.x -= frog.tongue.speed 
        }
        else if (frog.tongue.direction === "down" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
        tongueHeadCoordinates.y += frog.tongue.speed
        }
        else if (frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x < (width/2) - 4) {
                tongueHeadCoordinates.x += 10
        } else if ( frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x > (width/2) + 4) {
            tongueHeadCoordinates.x -= 10
        }
        else if (frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x <= (width/2) + 4 && tongueHeadCoordinates.x >= (width/2) - 4  ) {
        
            if (tongueHeadCoordinates.y < frog.body.y) {
                tongueHeadCoordinates.y += 30
            } else {
                frog.tongue.direction = "none"
            }
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
     * ?Changes the tongue state when you press on the keypad
     */
    function keyPressed() {
        // if (frog.tongue.state === "idle") {
        //     frog.tongue.state = "outbound";
        if (keyCode === UP_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "up"; //moves 0 along x and -1 (up) along y axis
        } else if (keyCode === DOWN_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "down";
        } else if (keyCode === RIGHT_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "right";
        } else if (keyCode === LEFT_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "left"
        } //Resets the direction to none if spacebar is pressed
        else if (keyCode === 32) {
        frog.tongue.direction = "goingBack"
        } //Changes the tongue speed to fast when the shift key is pressed
        else if (keyCode === 16 && frog.tongue.direction !== "goingBack") {
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


/**
 * TODO creates a function that draws a new Crazy Fly (Buggy Fly)
 */
function drawsNewCrazyFly() {
    //reatributes the buggyFlies array to another name for the loop and creates a loop the adds fly coordinates to the array and makes  / it move
    for (let crazyFly of buggyFlies) {
        moveCrazyFlies(crazyFly);
        newCrazyFly();
    }
    }
    
    /**
     * TODO Moves the fly according to its speed
     * TODO Resets the fly if it gets all the way to the right
     */
    function moveFly() {
        // Move the fly
        initialFly.x += initialFly.speed;
        // Handle the fly going off the canvas
        if (initialFly.x > width) {
            resetFly();
        }
    }
    
    /**
     * TODO Makes the buggy Fly move in a crazy way
     */
    function moveCrazyFlies(crazyFly) {
        let border = {
            left: 0,
            right: width,
            up: 0,
            down: height
        }
        
        let firstX = border.left + (crazyFly.size/2);
        let secondX = border.right - (crazyFly.size/2);
        let firstY = border.up + (crazyFly.size/2);
        let secondY = border.down - (crazyFly.size/2);
    
        let x = constrain(crazyFly.x, firstX, secondX);
        let y = constrain(crazyFly.y, firstY, secondY);
    
        x += random(-crazyFly.buzziness, crazyFly.buzziness);
        y += random(-crazyFly.buzziness, crazyFly.buzziness);
    
        //Draws the provided fly to the canvas
        push();
        noStroke();
        fill(crazyFly.r, crazyFly.g, crazyFly.b);
        ellipse(x, y, crazyFly.size);
        pop();
        
    }
    
    /**
     * TODO Creates the coordinate for a new buggy Fly
     */
    function newCrazyFly() {
       
        //creates random coordinates and buzziness for each buggyFly 
        let crazyFly = {
            x: random(0, width),
            y: random(0, height),
            size: random(15, 20),
            buzziness: 500,
            r: 0,
            g: 0,
            b: 255
        }; 
    // returns the values of the coordinates we just created
        return crazyFly;
    }
    
    /**
     * TODO Draws the initial fly as a black circle
     */
    function drawFly() {
        
        // flies.push = (
        push();
        noStroke();
        fill("#000000");
        ellipse(initialFly.x, initialFly.y, initialFly.size);
        pop();
        
    }
    
    /**
     * TODO Resets the initial fly to the left with a random y
     */
    function resetFly() {
        initialFly.x = 0;
        initialFly.y = random(200, 300);
    }
    
    
    /**
     * TODO Handles the tongue overlapping the fly and creates a new buggy fly everytume it overlaps, as well as resetting the initial fly location
     */
    function checkTongueFlyOverlap() {
        // Get distance from tongue to fly
        const d = dist(tongueHeadCoordinates.x, tongueHeadCoordinates.y, initialFly.x, initialFly.y);
    
        // Check if it's an overlap
        const eaten = (d < frog.tongue.size/2 + initialFly.size/2);
        if (eaten) {
            //Creates a Buggy Fly
            addsCrazyFlyToTheArray();
            // Reset the fly
            resetFly();
            
            returnsTongue();
        }
    }

    function returnsTongue() {
        
        frog.tongue.direction = "goingBack";

       

        // if (tongueHeadCoordinates.x < (width/2)) {
        //     // Bring back the tongue
        //     for (let i = tongueHeadCoordinates.x; i < 300; i += 1) {
        //     tongueHeadCoordinates.x += 1

        //     //Draws the tongue vector
        //     push();
        //     stroke(150, 0, 250);
        //     strokeWeight(frog.tongue.size)
        //     point(tongueHeadCoordinates)
        //     pop();

        //     // Draw the body of the tongue (that follows the tongue's)
        //      push();
        //     stroke(150, 50, 250);
        //     strokeWeight(frog.tongue.size);
        //     line(tongueHeadCoordinates.x, tongueHeadCoordinates.y, changedTongueOrigin.x, changedTongueOrigin.y);
        //     pop();
            
        //     }
        // } else if (tongueHeadCoordinates.x > (width/2)) {
        //     for (let i = tongueHeadCoordinates.x; i > 300; i -= 1) {
        //     tongueHeadCoordinates.x -= 1

        //     //Draws the tongue vector
        //     push();
        //     stroke(150, 0, 250);
        //     strokeWeight(frog.tongue.size)
        //     point(tongueHeadCoordinates)
        //     pop();

        //     // Draw the body of the tongue (that follows the tongue's)
        //      push();
        //     stroke(150, 50, 250);
        //     strokeWeight(frog.tongue.size);
        //     line(tongueHeadCoordinates.x, tongueHeadCoordinates.y, changedTongueOrigin.x, changedTongueOrigin.y);
        //     pop();
            
        //     }
        // }
        // frog.tongue.direction = "goingBack";
    }
    /** 
     * TODO Adds a new buggy Fly coordinates to the biggyFlies Array
     */
    function addsCrazyFlyToTheArray() {
    let randomFly = newCrazyFly();
    buggyFlies.push(randomFly)
}

