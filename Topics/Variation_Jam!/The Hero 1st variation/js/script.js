/**
 * The Hero (1st variation)
 * Simon Duchainde Morneau
 * 
 * Control a cubve and move accross the room by jumping from one platform to another. But don't forget to avoid the deadly lava!
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
    speed: {
        state: "normal",
        x: 5,
    },
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
    createWalls();
    createPlatforms();
    createLava();
    gameMechanics();
    drawHero();
    moveHero();
    heroJump();
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

/**
 * moves the hero (left to right, fast or slow)
*/
function moveHero() {

    //changes the hero speed depending on it's state
    if (hero.speed.state === "fast") {
        hero.speed.x = 7;
    } else {
        hero.speed.x = 5;
    }

    //moves the hero left to right
    if (hero.direction === "none") {
        
        hero.x = hero.x //nothing

    } else if (hero.direction === "right") {

        hero.x += hero.speed.x; //goes right

    } else if (hero.direction === "left") {

        hero.x -= hero.speed.x; //goes left
    }

    
    //constrains the hero to go off the canvas on the right
    if (hero.x > width - hero.size/2) {
        hero.x = width - hero.size/2 ;
    } 
    //constrains the hero to go off the canvas on the left
    else if (hero.x < 0 + hero.size/2) {
        hero.x = 0 + hero.size/2
    }

}



/**
 * makes the hero jump
*/
function heroJump() {
    if (hero.jump.state === "active") {
        
        
        if (
            hero.jump.direction === "none" 
            && hero.jump.y < hero.jump.maxY
        ) { //starts the jump
            hero.jump.y += 1;
            //gravity
            hero.jump.speed -= hero.deceleration.y;
            hero.y -= hero.jump.speed;
            
    
        } else if (hero.jump.y === hero.jump.maxY) { //attains the apex of the jump 
            
            hero.jump.y -= 1
            //sets the direction of the jump to down/falling
            hero.jump.direction = "down"
        
        } else if (hero.jump.y < hero.jump.maxY && hero.jump.direction === "down" && hero.jump.y != 0) { //the hero is still falliing and has not touched the ground 

            hero.jump.y -= 1
            //gravity
            hero.jump.speed += hero.deceleration.y 
            hero.y += hero.jump.speed;
            
        } else if (hero.jump.y === 0 && hero.jump.direction === "down") {
            // Resets everything to normal
            hero.jump.speed = 9;
            hero.jump.state = "no";
            hero.jump.direction = "none";
            hero.deceleration.y = 0.3
        }       
    } 
}

//when the keys are pressed
function keyPressed() {
    
    if (keyCode === 39) { //right arrow
        hero.direction = "right";
    } else if (keyCode === 37) { //left arrow
        hero.direction = "left";
    } else if (keyCode === 38 && keyCode === 39) { //up & right
        hero.jump.state = "active";
        hero.direction = "right";
    } else if (keyCode === 38 && keyCode === 37) { //up & left
        hero.jump.state = "active";
        hero.direction = "left";
    } else if (keyCode === 38) { //up arrow
        hero.jump.state = "active";
    } else if (keyCode === 16) { //shift key
        hero.speed.state = "fast"
    } else if 
    //Starts the game when spacebar is pressed
     (keyCode === 32 && gameState === "titleScreen") { //Spacebar
        gameState = "start"
    } //Starts the game when the game is won
    else if (keyCode === 32 && gameState === "titleScreen") { //Spacebar
        gameState = "titleScreen"
    } 
}

//when the keys are released
function keyReleased() {
    if (keyCode == 37 ) { //left arrow
        hero.direction = "none"
    } else if (keyCode == 39) { //right arrow
        hero.direction = "none"
    } 

    if (keyCode === 16) { //shift key
        hero.speed.state = "normal"
    }
}