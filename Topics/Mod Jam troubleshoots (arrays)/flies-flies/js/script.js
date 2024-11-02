/**
 * Flies flies
 * Pippin Barr
 * 
 * A program for drawing flies on the canvas. The flies are stored
 * in an array. We display them with a for...of loop
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let border = {
    up: 0,
    down: 200,
    left: 0,
    right: 200
} 
let flies = [];


/**
 * Create the canvas
 */
function setup() {
    // Let's make it tiny for some reason
    createCanvas(200, 200);

    

}

/**
 * Display the flies in the array
 */
function draw() {
    background("#87ceed");

    // Display each fly in the array
    for (let fly of flies) {
        moveFly(fly);
        newFly();
    }
    
}


/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {

    let firstX = border.left + (fly.size/2);
    let secondX = border.right - (fly.size/2);
    let firstY = border.up + (fly.size/2);
    let secondY = border.down - (fly.size/2);

    let x = constrain(fly.x, firstX, secondX);
    let y = constrain(fly.y, firstY, secondY);

    x += random(-fly.buzziness, fly.buzziness);
    y += random(-fly.buzziness, fly.buzziness);

    let r = random(0,255);
    let b = random(0,255);
    
    //Draws the provided fly to the canvas
    push();
    noStroke();
    fill(r, 100, b);
    ellipse(x, y, fly.size);
    pop();
    console.log(fly)
}

function newFly() {
    
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(0, 10),
        buzziness: random(20, 50),
        r: random(0,255),
        b: random(0,255)
    }; 

    return fly;
}

function mousePressed() {
let randomFly = newFly();
flies.push(randomFly)
}

console.log(flies)
