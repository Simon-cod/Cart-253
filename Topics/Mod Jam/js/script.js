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

let gameState = "titleScreen"

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


// !Creates an Array for the three lily pads
let lilyPads = [
    {
        x: 600,
        y: 406,
        size: 130,
        speed: 2,
        direction: "left",
        rotationSpeed: -2,
        slipSize: 22,
        angle: 0,
        r: 0, 
        g: 215,
        b: 150,
    },
    {
        x: 0,
        y: 812,
        size: 150,
        speed: 5,
        direction: "right",
        angle: 120,
        rotationSpeed: 1.2,
        slipSize: 9,
        r: 0, 
        g: 200,
        b: 150
    },
    {
        x: 600,
        y: 1218,
        size: 100,
        speed: 3,
        direction: "left",
        angle: 210,
        rotationSpeed:-2.6,
        slipSize: 12,
        r: 0, 
        g: 175,
        b: 150
    },
];

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
let border = undefined;

// TODO Creates an empty array for the buggyFlies
let buggyFlies = [];

let distance = [];


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
        title();
    }else if (gameState === "start") {
        startGame();
    } else if (gameState === "over") {
        gameOver();
    }
}

function startGame() {

    background("#87ceeb");
    moveFly();
    drawFly();
    moveTongue();
    drawTongue();
    drawFrog();
    checkTongueFlyOverlap();
    drawsNewCrazyFly()
    createLilyPads()
    score()
}

function title() {
    background(100, 0, 200);
    push();
    textSize(110);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Venomous", width/2, 330);
    pop();

    push();
    textSize(100);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Frog", width/2, 450);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Try to catch as many flies as possible,", width/2, 580);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("but don't touch the lily pads!", width/2, 620);
    pop();
    
    push();
    textSize(50);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Controls:", width/2, 750);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Keypad controls the tongue", width/2, 925);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Shift = Speed boost", width/2, 1075);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Space-bar = Reset", width/2, 1225);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("PRESS SPACE-BAR TO START", width/2, 1425);
    pop();

    push();
    textSize(22);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Created by Simon Duchaine Morneau", width/2, 1580);
    pop();

    }

    function score() {
        
        let score = buggyFlies.length;
    
        push();
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0);
        text("score = ", 100, 50);
        pop();
    
        push();
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0, 0, 255);
        text(score, 190, 50);
        pop();
    }
    
    function gameOver() {
        background(100, 0, 200);
        push();
        textSize(100);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text("Game Over", width/2, height/2);
        pop();
    
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("The venomous frog contaminated", width/2, (height/2 + 135));
        pop();
    
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("the healthy ecosystem", width/2, (height/2 + 185));
        pop();

        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text("PRESS SPACE-BAR TO RETRY", width/2, 1425);
        pop();
        
    }
    
/**
 * !Draws and moves the lilypads
 */
function createLilyPads() {
   
    for (let lilyPad of lilyPads) {
        drawLilyPads(lilyPad)
        movelilyPads(lilyPad)
        checkTongueLilyPadsOverlap(lilyPad)
    };

}



/**
 * !Draws the lilypads and makes them the roate
 */
function drawLilyPads(lilyPad) {
    //Draws the lily pads
    push();
    fill(lilyPad.r, lilyPad.g, lilyPad.b);
    stroke(lilyPad.r - 80, lilyPad.g - 80, lilyPad.b - 80);
    strokeWeight(2)
    ellipse(lilyPad.x, lilyPad.y, lilyPad.size);
    pop();
    
    //Creates a slip in the lily pads
    push();
    //Changes the origins to the center of the lily pad
    translate(lilyPad.x, lilyPad.y);
    //Changes the angle mode to degrees
    angleMode(DEGREES);
    //rotates each lily pad in a different angle
    rotate(lilyPad.angle);
    //rotates each lily pad at a different speed
    rotate(frameCount * lilyPad.rotationSpeed);
    //Draws lines with different colors depending on the lily pad
    stroke(lilyPad.r - 80, lilyPad.g - 80, lilyPad.b - 80);
    strokeWeight(2);
    line(0, 0, lilyPad.size/2,0);
    line(0, 0, lilyPad.size/2, lilyPad.slipSize);
    pop();
}

/**
 * !Moves the lilypads
 */
function movelilyPads(lilyPad) {

    //Assign a direction to the right if the lily pad goes too far left
    if (lilyPad.x < 0) {
    lilyPad.direction = "right"
    } //Assigns a direction to the left if the lily pad goes too far right
    else if (lilyPad.x > width) {
    lilyPad.direction = "left"
    };
   
    //makes the lilypads go to the right (adds an x value every frame)
    if (lilyPad.direction === "right") {
        lilyPad.x += lilyPad.speed;
    } else 
    //makes the lilypads go to the left (removes an x value every frame)
    if (lilyPad.direction === "left") {
        lilyPad.x -= lilyPad.speed;
    }
 }

 function checkTongueLilyPadsOverlap(lilyPad) {
    
    
//  arrayCopy(lilyPad, 0, distance, 0, lilyPad.length);
//  print(distance)

for (let i = 0; i < lilyPad.length + 1; i += 1) {
    distance.unshift(lilyPad[i])
}
// distance.unshift(lilyPads[2])
console.log(distance)

    // Get distance from tongue to fly
    for (let di of distance) {
    
    di = dist(tongueHeadCoordinates.x, tongueHeadCoordinates.y, lilyPad.x, lilyPad.y);
    

    // Check if it's an overlap
    const hit = (di < frog.tongue.size/2 + lilyPad.size);
    if (hit) {
        frog.tongue.direction = "goingBack"
    }
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
            //ends when 5 flies have been eaten
                if (numbersOfCrazyFlies === 5) {
                
                    gameState = "over"
                    // gameState = "end"
                }
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


/**
 * TODO creates a function that draws a new Crazy Fly (Buggy Fly)
 */
function drawsNewCrazyFly() {
    //reatributes the buggyFlies array to another name for the loop and creates a loop the adds fly coordinates to the array and makes  / it move
    for (let crazyFly of buggyFlies) {
       
        moveCrazyFlies(crazyFly);
        newCrazyFly();

        // if (gameState = "end") {
            
        //     for (let i = 0; i < 25; i += 1) {
        //     i = 0
        //     moveCrazyFlies(crazyFly);
        //     newCrazyFly()
        //     addsCrazyFlyToTheArray()
        //     }
        //     gameState = "over"
        // }

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

        
    
        console.log(buggyFlies)
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
        console.log(frog.tongue.direction)
    }
    

    function returnsTongue() {
        
        frog.tongue.direction = "goingBack";

    }
    /** 
     * TODO Adds a new buggy Fly coordinates to the biggyFlies Array
     */
    function addsCrazyFlyToTheArray() {
    let randomFly = newCrazyFly();
    buggyFlies.push(randomFly)
}

