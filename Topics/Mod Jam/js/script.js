/**
 * Poisonous Frog
 * Simon Duchaine Morneau
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

//?Creates a variable for the tongue's direction and apply it's state to none
let direction = "none";

//?Creates a variable for the tongue Head x & y coordinates
let tongueHeadCoordinates;

//?Creates a variable to change the tongue Origin (define later)
let initialTongueOrigin;

// ?Our frog
let frog = {
    // The frog's body has a position and size
    body: {
        x: 300,
        y: 1600,
        size: 150
    },
    // The frog's tongue has a position, size, speed, state, stateSpeed and direction
    tongue: {
        x: 300,
        y: 1624,
        size: 17,
        speed: 4,// Determines how the tongue moves each frame
        state: "idle", // State can be: idle, outbound, inbound
        stateSpeed: "normal", //stateSpeed can be normal & fast
        direction: "none", //Direction can be: none, up, down, left, right
       //Specifies the tongue's head coordinates
        head: {
            x: 75,
            y: 565
        },
    }
}


//?Creates a variable for the score and sets it to 0
let score = 0

/**
 * ?Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(600, 1624);

    // Give the fly its first random position
    resetHealthyFly();

    //Creates a vector with the tongue head coordinates
    tongueHeadCoordinates = createVector(frog.tongue.head.x, frog.tongue.head.y);

    //Creates a vector with the tongue origins (that will be changing)
    initialTongueOrigin = createVector(frog.body.x, (frog.body.y - frog.body.size/2))
    
}

/**
 * ?Loads the titleScreen, the actual game or the game over screen depending on the gameState
 */
function draw() {
    
    if (gameState === "titleScreen") {
        //makes the infectedFlies array empty
        infectedFlies = [];
        //makes the score resets to 0
        score = 0
        //loads the title screen
        title();
    }else if (gameState === "start") {
        //loads the game
        runGame();
    } else if (gameState === "over") {
        //loads the game over screen
        gameOver();
    }
}

/**
 * ?Draws the tongue as a vector
*/
function drawTongue() {
    //Draws the tongue's head point
     push();
     stroke(150, 50, 250);
     strokeWeight(frog.tongue.size)
     point(tongueHeadCoordinates)
     pop();

   //Draws the body of the tongue as a line (that follows the tongue's head)
    push();
    stroke(150, 50, 250); //Makes the tongue purple
    strokeWeight(frog.tongue.size);
    line(tongueHeadCoordinates.x, tongueHeadCoordinates.y, initialTongueOrigin.x, initialTongueOrigin.y);
    pop();
}

    /**
     * ?Draws the frog (body)
     */
    function drawFrog() {

        // Draw the frog's body
        push();
        fill(50, 150, 250);
        stroke(0, 0, 200);
        ellipse(frog.body.x, frog.body.y, frog.body.size);
        pop();

        //Draw all the blue spots on his body
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

        //Makes the tongue move faster if shift is pressed
        if (frog.tongue.stateSpeed === "fast") {
        frog.tongue.speed = 10;
        } 
        else {
        frog.tongue.speed = 4;
        }

        // If the tongue direction is none, it doesn't do anything
        if (frog.tongue.direction === "none") {
            // Tongue matches the frog's body x and the frog<s mouth y
            tongueHeadCoordinates.x = frog.body.x;
            tongueHeadCoordinates.y = (frog.body.y - frog.body.size/2);
        }
        else if (frog.tongue.direction === "up") {
            //removes a y value so it goes up
            tongueHeadCoordinates.y -= frog.tongue.speed;
        }
        else if (frog.tongue.direction === "right" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
            //adds an x value so it goes right
            tongueHeadCoordinates.x += frog.tongue.speed;
        }
        else if (frog.tongue.direction === "left" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
            //removes an x value so it goes left
            tongueHeadCoordinates.x -= frog.tongue.speed 
        }
        else if (frog.tongue.direction === "down" && tongueHeadCoordinates.y < (frog.body.y - frog.body.size/2)) {
            //adds a y value so it goes down
            tongueHeadCoordinates.y += frog.tongue.speed
        }
        else if (frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x < (width/2) - 4) {
            //makes the tongue quickly go back to the frog's body x coordinates    
            tongueHeadCoordinates.x += 10
        } 
        else if ( frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x > (width/2) + 4) {
            //makes the tongue quickly go back to the frog's body x coordinates
            tongueHeadCoordinates.x -= 10
        }
        else if (frog.tongue.direction === "goingBack" && tongueHeadCoordinates.x <= (width/2) + 4 && tongueHeadCoordinates.x >= (width/2) - 4  ) {
            
            if (tongueHeadCoordinates.y < frog.body.y) {
                //makes the tongue quickly go back to the frog's body y coordinates if it's not there yet
                tongueHeadCoordinates.y += 30
            } 
            //calculates when the tongue is back to the frog's body x and y coordinates
            else {
                frog.tongue.direction = "none"
            }
        }
    }
/**
     * ?returns the tongue to the frog's body
     */
function returnsTongue() {
        
    frog.tongue.direction = "goingBack";

}
     /**
     * ?Changes the tongue state when you press on the keypad
     */
    function keyPressed() {
        
        if (keyCode === UP_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "up"; //moves the tongue up
        } 
        else if (keyCode === DOWN_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "down"; //moves the tongue down
        } 
        else if (keyCode === RIGHT_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "right"; //moves the tongue right
        } 
        else if (keyCode === LEFT_ARROW && frog.tongue.direction !== "goingBack") {
        frog.tongue.direction = "left" //moves the tongue left
        } 
        //Returns the tongue to the frog's body if spacebar is pressed
        //Spacebar keycode = 32
        else if (keyCode === 32 && gameState === "start") {
        frog.tongue.direction = "goingBack"
        } 
        //Starts the game when spacebar is pressed
        //Spacebar keycode = 32
        else if (keyCode === 32 && gameState === "titleScreen") {
            gameState = "start"
        } 
        //Restarts the game and shows the title screen if spacebar is clicked after game over
        //Spacebar keycode = 32
        else if (keyCode === 32 && gameState === "over") {
            gameState = "titleScreen"
        }
        //Makes the tongue speed faster when the shift key is pressed
        //Shift keycode = 16
        else if (keyCode === 16 && frog.tongue.direction !== "goingBack") {
        frog.tongue.stateSpeed = "fast"
         } 
    }

    /**
     * ? Removes the speed effect when you release the shift key
     */
    function keyReleased() {
        //Shift keycode = 16
        if (keyCode === 16) {
        frog.tongue.stateSpeed = "normal"
        }
}
    
    
