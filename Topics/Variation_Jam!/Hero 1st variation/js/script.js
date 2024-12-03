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

    //sets that all the x and y coordinates for rectangles and cubes determine the position of the center of the shape
    rectMode(CENTER)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(170, 0, 0)
drawCube();
createWalls();
createRectangles();
moveCube();
cubeJump();

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


    if (cube.speed.state === "fast") {
        cube.speed.x = 7;
    } else {
        cube.speed.x = 5;
    }

    if (cube.direction === "none") {
        
        cube.x = cube.x //nothing

    } else if (cube.direction === "right") {

        cube.x += cube.speed.x; //goes right

    } else if (cube.direction === "left") {

        cube.x -= cube.speed.x; //goes left
    }

    
    // resets the hero the other side of the screen if it goes offscreen
    
    if (cube.x > width - cube.size/2) {
       cube.x = width - cube.size/2 ;
    } else if (cube.x < 0 + cube.size/2) {
       cube.x = 0 + cube.size/2
    }

}



/**
 * makes the hero jump
*/

function cubeJump() {
    if (cube.jump.state === "active") {

        console.log(cube.jump.y);
        console.log(cube.jump.speed);
        
        // modified the if statement (no need for the "up" state: we are already in the "none" state, you can't be in both at once)
        if (
            cube.jump.direction === "none" 
            && cube.jump.y < cube.jump.maxY 
        ) {
    
            cube.jump.y += 1;
            cube.jump.speed -= cube.deceleration.y;
            cube.y -= cube.jump.speed;
            
    
        } else if (cube.jump.y === cube.jump.maxY) {
            
            cube.jump.y -= 1
            cube.jump.direction = "down"
            
            
    
        } else if (cube.jump.y < cube.jump.maxY && cube.jump.direction === "down" && cube.jump.y != 0) {

            cube.jump.y -= 1
            cube.jump.speed += cube.deceleration.y 
            cube.y += cube.jump.speed;
            
        } else if (cube.jump.y === 0 &&  cube.jump.direction === "down") {
            // Main change:
            cube.jump.speed = 9;
            cube.jump.state = "no"
            cube.jump.direction = "none"
            cube.deceleration.y = 0.3
            console.log("end");
        }       
    } 
}

// function cubJump() {
//     // console.log(cube.jump.state, cube.jump.direction, cube.jump.speed, cube.jump)
//     // console.log("cube.y " + cube.y)
//     if (cube.jump.state === "active") {

        
        
//         // console.log(cube.jump.speed)
//         // console.log(cube.y)
        
        
//         if (cube.jump.y < cube.jump.maxY && cube.jump.direction === "none" || cube.jump.y < cube.jump.maxY && cube.jump.direction === "up") {
            
//             //moves the hero upwards

//             cube.jump.y += 1
//             cube.jump.direction = "up"
//             cube.jump.speed -= cube.deceleration.y 
//             cube.y -= cube.jump.speed;
            
    
//         } else if (cube.jump.y === cube.jump.maxY) {
            
//             //stops the hero at the apex of his jump

//             cube.jump.y -= 1
//             cube.jump.direction = "down"
            
//         } else if (cube.jump.direction === "down" && cube.y < (rect1.y - cube.size/2)) {

//             //moves the hero downwards

            
//             cube.jump.speed += cube.deceleration.y 
//             cube.y += cube.jump.speed;

//             console.log(cube.y)

//         }  else if (cube.y >= (rect1.y - cube.size/2) && cube.jump.direction === "down") {
            
            
//             cube.jump.speed = 9;
//             cube.jump.y = 0;
//             // rect1.b = 255;
//             cube.y = (curentGround.y - cube.size/2);
//             cube.jump.direction = "none";
//             cube.jump.state = "no";
//         }       
//     // } else if (cube.jump.state === "no") {
//     //     // cube.y = (ground.y - cube.size)
        
//     }     
//     } 

/**
//  * draws the ground
// */
// function drawGround(){
//     push();
//     // strokeWeight(3);
//     line(0, 800, 1000, 800);
//     pop();
// }

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
    } else if (keyCode === 16) { //shift key
        cube.speed.state = "fast"
    }
    console.log(cube.jump.state)
}

function keyReleased() {
    if (keyCode == 37 && keyCode !== 39) {
    cube.direction = "none"
    } else if (keyCode == 39 && keyCode !== 37) {
    cube.direction = "none"
    } 
    
    if (keyCode === 16) {
        cube.speed.state = "normal"
    }
}