/**
 * Cowboy cube
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/


//Our main character
let hero = {
    x: 40,
    y: 785,
    w: 30,
    h: 30,
    size: 30,
    //the cube's speed
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


function setup() {

    createCanvas(1000, 1000)

    //sets that all the x and y coordinates for rectangles and cubes determine the position of the center of the shape
    rectMode(CENTER)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(100, 0, 0)
drawHero();
createWalls();
createPlatforms();
drawPoolofLava();
deadlyLava();
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