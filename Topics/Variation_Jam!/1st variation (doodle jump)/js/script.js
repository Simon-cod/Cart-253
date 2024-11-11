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

let cube = {
    x: 20,
    y: 150,
    size: 50,
    speed: {
        x: 5,
        y: 1,
    },
    jump: {
        state: "no",
        direction: "none",
        speed: 4,
        y: 0,
        maxY: 40
    },
    deceleration: {
        x: 0.1,
        y: 0.1
    },
    direction: "none",
    action: "walking",
}

let ground = {
    x1: 0,
    x2: 1000,
    y: 200,
    speed: 2
}

function setup() {

    createCanvas(1000, 2000)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0, 50, 100)
drawCube();
drawGround();
moveGround();
moveCube();
cubeJump();
console.log(cube.state)
}

function drawCube() {

    push();
    fill(0, 100, 200);
    noStroke();
    square (cube.x, cube.y, cube.size);
    pop();

}

function moveCube() {

    
    if (cube.direction === "none") {
        
        cube.x = cube.x //nothing

    } else if (cube.direction === "right") {

        cube.x += cube.speed.x;

    } else if (cube.direction === "left") {

        cube.x -= cube.speed.x;
    }

    if (cube.x > width) {
        cube.x = 0 ;
    } else if (cube.x < 0) {
        cube.x = width
    }

}

function cubeJump() {
    if (cube.jump.state === "active") {

        console.log(cube.jump.y)
        console.log(cube.jump.speed)
        
        if (cube.jump.y < cube.jump.maxY && cube.jump.direction === "none" || cube.jump.y < cube.jump.maxY && cube.jump.direction === "up") {
    
            cube.jump.y += 1
            cube.jump.direction = "up"
            cube.jump.speed -= cube.deceleration.y 
            cube.y -= cube.jump.speed;
            
    
        } else if (cube.jump.y === cube.jump.maxY) {
            
            cube.jump.y -= 1
            cube.jump.direction = "down"
            
            
    
        } else if (cube.jump.y < cube.jump.maxY && cube.jump.direction === "down" && cube.y < (ground.y - cube.size) ) {

            cube.jump.y -= 1
            cube.jump.speed += cube.deceleration.y 
            cube.y += cube.jump.speed;
            
        } else if (cube.y > (ground.y - cube.size) &&  cube.jump.direction === "down") {
            
            cube.jump.state = "no"
            cube.jump.direction = "none"
            
        }       
    } else if (cube.jump.state === "no") {
        cube.y = (ground.y - cube.size)
        cube.jump.speed = 4
        cube.jump.y = 0
    }
}


function drawGround(){
    push();
    // strokeWeight(3);
    line(ground.x1, ground.y, ground.x2, ground.y);
    pop();

    if (ground.y > height) {
        ground.y = 0
    }
}

function moveGround() {
    ground.y += ground.speed
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