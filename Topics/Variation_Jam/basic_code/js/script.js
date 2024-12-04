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
let cube = {
    x: 20,
    y: 750,
    size: 50,
    //the cube's speed
    speed: {
        x: 5,
    },
    jump: {
        state: "no",
        direction: "none",
        speed: 9,
        y: 0,
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
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(100, 0, 0)
drawCube();
drawGround();
moveCube();
cubeJump();
console.log(cube.state)
}

/**
 * Draws the hero
*/
function drawCube() {

    push();
    fill(0, 0, 0);
    noStroke();
    square (cube.x, cube.y, cube.size);
    pop();

}

/**
 * moves the hero (left to right)
*/
function moveCube() {

    
    if (cube.direction === "none") {
        
        cube.x = cube.x //nothing

    } else if (cube.direction === "right") {

        cube.x += cube.speed.x; //goes right

    } else if (cube.direction === "left") {

        cube.x -= cube.speed.x; //goes left
    }

    //resets the hero the other side of the screen if it goes offscreen
    if (cube.x > width) {
        cube.x = 0 ;
    } else if (cube.x < 0) {
        cube.x = width
    }

}

/**
 * makes the hero jump
*/
function cubeJump() {
    if (cube.jump.state === "active") {

        
        console.log(cube.jump.y)
        console.log(cube.jump.speed)
        
        
        if (cube.jump.y < cube.jump.maxY && cube.jump.direction === "none" || cube.jump.y < cube.jump.maxY && cube.jump.direction === "up") {
            
            //moves the hero upwards

            cube.jump.y += 1
            cube.jump.direction = "up"
            cube.jump.speed -= cube.deceleration.y 
            cube.y -= cube.jump.speed;
            
    
        } else if (cube.jump.y === cube.jump.maxY) {
            
            //stops the hero at the apex of his jump

            cube.jump.y -= 1
            cube.jump.direction = "down"
            
            
    
        } else if (cube.jump.y < cube.jump.maxY && cube.jump.direction === "down" && cube.jump.y != 0) {

            //moves the hero downwards

            cube.jump.y -= 1
            cube.jump.speed += cube.deceleration.y 
            cube.y += cube.jump.speed;
            
        } else if (cube.jump.y === 0 &&  cube.jump.direction === "down") {
            
            //resets the hero state to walking

            cube.jump.state = "no"
            cube.jump.direction = "none"
            cube.jump.speed = 9
        }       
    } 
}

/**
 * draws the ground
*/
function drawGround(){
    push();
    // strokeWeight(3);
    line(0, 800, 1000, 800);
    pop();
}

function keyPressed() {
    
    if (keyCode === 39) { //right arrow
        cube.direction = "right";
    } else if (keyCode === 37) { //left arrow
        cube.direction = "left";
    } else if (keyCode === 38 && keyCode === 39) { //up & right
        cube.jump.state = "active";
        cube.direction = "right";
    } else if (keyCode === 38 && keyCode === 37) { //up & left
        cube.jump.state = "active";
        cube.direction = "left";
    } else if (keyCode === 38) { //up arrow
        cube.jump.state = "active";
    }
}

function keyReleased() {
    if (keyCode == 37 && keyCode !== 39) {
    cube.direction = "none"
    } else if (keyCode == 39 && keyCode !== 37) {
    cube.direction = "none"
    }
}