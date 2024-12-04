/**
 * The Fireball
 * Simon Duchaine Morneau
 * 
 * It's now time to be the villain! Fly across the room as a fireball to kill the hero, but be careful of the deadly platforms and your dangerously increasing speed.
 */

"use strict";


//creates a variable for the state of the game
let gameState = "titleScreen" //can be "titleScreen", "start" or "gameWon"

//Our main character
let hero = {
    x: 40,
    y: 785,
    w: 30,
    h: 30,
    size: 30,
    //the hero's speed
    jump: {
        state: "no",
        direction: "none",
        speed: 9,
        //variable to calculate the jump's height
        y: 0,
        //the maximum height of the jump
        maxY: 30 
    },
    deceleration: { //gravity
        y: 0.3
    },
    direction: "none", //which way is the cube going
    action: "walking", //can be walking, jumping or slashing
}

/**
 * creates the canvas and sets the rectangle mode to center
*/
function setup() {

    createCanvas(1000, 1000)

    //sets that all the x and y coordinates for rectangles and cubes determine the position of the center of the shape
    rectMode(CENTER)

}


/**
 * either shows the title, runs the game or show the ending title depending on the state of the game
*/
function draw() {

    if (gameState === "titleScreen") {
        //loads the title screen
        title();
    }else if (gameState === "start") {
        //loads the game
        runGame();
    } else if (gameState === "gameWon") {
        //loads the game over screen
        gameWon();
    }


}
/**
 * Runs the game
*/
function runGame() {

    background(100, 0, 0)
    drawSun();
    createPlatforms();
    createLava();
    gameMechanics();
    drawHero();
}

/**
 * Draws the hero
*/
function drawHero() {
    

    push();
    fill(0, 0, 0);
    noStroke();
    square (hero.x, hero.y, hero.size);
    pop();

}

//when the keys are pressed
function keyPressed() {
    
    if (keyCode === 39) { //right arrow
        fireBall.state = "shooting"
        fireBall.shooting.direction = "right";
    } else if (keyCode === 37) { //left arrow
        fireBall.state = "shooting"
        fireBall.shooting.direction = "left";
    } else if (keyCode === 38) { //up arrow
        fireBall.state = "shooting"
        fireBall.shooting.direction = "up";
    } else if (keyCode === 40) { //down arrow
        fireBall.state = "shooting"
        fireBall.shooting.direction = "down"
    } else if 
    //Starts the game when spacebar is pressed
     (keyCode === 32 && gameState === "titleScreen") { //Spacebar
        gameState = "start"
    } //Starts the game when the game is won
    else if (keyCode === 32 && gameState === "titleScreen") { //Spacebar
        gameState = "titleScreen"
    } 
}