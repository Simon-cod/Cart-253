/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game that consists of catching flies with your venomous frog's tongue. You need to avoid the lily pads and catch as many fly as you can. 
 * But be careful, if you catch too many flies, you will contaminate the ecosystem and lose the game. Too bad
 * 
 * Instructions:
 * - Move the frog's tongue with your keypad
 * - Press shift to have a speed boost
 * - Press space-bar to reset the tongue's position
 * - Avoid the lily pads
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



let score = 0


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
    
    if (gameState === "titleScreen") {
        buggyFlies = [];
        score = 0
        title();
    }else if (gameState === "start") {
        runsGame();
    } else if (gameState === "over") {
        gameOver();
    }
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
    
        //Creates a variable that calculates the number of flies eaten
        let numbersOfCrazyFlies = buggyFlies.length;

        //Makes the tongue move faster
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
        //adds an x value so it goes right
        else if (frog.tongue.direction === "right" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
       
        tongueHeadCoordinates.x += frog.tongue.speed;

        }
        //removes an x value so it goes left
        else if (frog.tongue.direction === "left" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
        tongueHeadCoordinates.x -= frog.tongue.speed 
        }
        //adds a y value so it goes down
        else if (frog.tongue.direction === "down" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
        tongueHeadCoordinates.y += frog.tongue.speed
        }
        //makes the tongue quickly go back to the frog's body x coordinates
        else if (frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x < (width/2) - 4) {
                tongueHeadCoordinates.x += 10
        //makes the tongue quickly go back to the frog's body x coordinates
        } else if ( frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x > (width/2) + 4) {
            tongueHeadCoordinates.x -= 10
        }
        //makes the tongue quickly go back to the frog's body y coordinates
        else if (frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x <= (width/2) + 4 && tongueHeadCoordinates.x >= (width/2) - 4  ) {
            
            if (tongueHeadCoordinates.y < frog.body.y) {
                tongueHeadCoordinates.y += 30
            } 
            //calculates when the tongue is back to the frog's body x and y coordinates
            else {
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
        else if (keyCode === 32 && gameState === "start") {
        frog.tongue.direction = "goingBack"
        } else if (keyCode === 32 && gameState === "titleScreen") {
            gameState = "start"
        } else if (keyCode === 32 && gameState === "over") {
            gameState = "titleScreen"
        }
        //Changes the tongue speed to fast when the shift key is pressed
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

    function returnsTongue() {
        
        frog.tongue.direction = "goingBack";

    }
    
