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

let rect1 = {
    x: 700,
    y: 725,
    b: 0,
    width: 300,
    height: 30 
}
//Our main character
let cube = {
    x: 40,
    y: 785,
    w: 30,
    h: 30,
    size: 30,
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

let curentGround = {
    y: 800,
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
drawCube();
drawGround();
drawRectangle1();
moveCube();
cubeJump();
checkOverlapGroundHero();

}


/**
 * chack if the hero overlaps with the second ground (rectangle 1)
*/
function checkOverlapGroundHero() {
 // checking if each side of the rectangles overlap/touch
 if (
    rect1.y + rect1.height / 2 >= cube.y - cube.h / 2 && // rect1 bottom and cube top
    rect1.y - rect1.height / 2 <= cube.y + cube.h / 2 &&   // rect1 top and cube bottom
    rect1.x + rect1.width / 2 >= cube.x - cube.w / 2 && // rect1 right and cube left
    rect1.x - rect1.width / 2 <= cube.x + cube.w / 2 // rect1 left and cube right 
    ){
        rect1.b = 255;
        // cube.direction = "none";
        cube.jump.state = "no";
        cube.jump.direction = "none";
        cube.jump.speed = 9;
        cube.jump.y = 0;
        cube.y = rect1.y - rect1.height/2 - cube.size/2;
    } 
else if (cube.y === rect1.y - rect1.height/2 - cube.size/2 && cube.jump.state === "no"){
   fallingOff();
    rect1.b = 0;
} else {
    rect1.b = 0;
}
}

/**
 * what happens if a hero falls off from a platform
*/
function fallingOff() {
    cube.jump.direction = "down";
    cube.jump.speed = 0.3;
    cube.jump.state = "active";
}

/**
 * draws the rectacngle that serves as a second ground
*/
function drawRectangle1() {

    push();
    fill(0, 0, rect1.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height)
    pop();

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
    console.log(cube.jump.state, cube.jump.direction, cube.jump.speed, cube.jump)
    console.log("cube.y " + cube.y)
    if (cube.jump.state === "active") {

        
        // console.log(cube.jump.y)
        // console.log(cube.jump.speed)
        // console.log(cube.y)
        
        
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
            
        } else if (cube.jump.direction === "down" && cube.y < (curentGround.y - cube.size/2)) {

            //moves the hero downwards

            
            cube.jump.speed += cube.deceleration.y 
            cube.y += cube.jump.speed;

            console.log(cube.y)

        }  else if (cube.y >= (curentGround.y - cube.size/2) && cube.jump.direction === "down") {
            
            
            cube.jump.speed = 9;
            cube.jump.y = 0;
            rect1.b = 255;
            cube.y = (curentGround.y - cube.size/2);
            cube.jump.direction = "none";
            cube.jump.state = "no";
        }       
    // } else if (cube.jump.state === "no") {
    //     // cube.y = (ground.y - cube.size)
        
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