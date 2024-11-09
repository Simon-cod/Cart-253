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
    y: 850,
    size: 50,
    speed: {
        x: 5,
        y: 1,
    },
    jump: {
        state: "no",
        speed: 3,
        maxY: 0
    },
    deceleration: {
        x: 0.05,
        y: 0.05
    },
    direction: "none",
    action: "walking",
}

function setup() {

    createCanvas(1000, 1000)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0, 50, 100)
drawCube();
drawGround();
moveCube();
cubeJump();
console.log(cube.state)
}

function drawCube() {

    fill(0, 100, 200);
    square (cube.x, cube.y, cube.size);

}

function moveCube() {

    
    if (cube.direction === "none") {
        
        cube.x = cube.x //nothing

    } else if (cube.direction === "right") {

        cube.x += cube.speed.x;

    } else if (cube.direction === "left") {

        cube.x -= cube.speed.x;
    }

}

function cubeJump() {
    if (cube.jump.state === "active") {

        if (cube.jump.maxY <= 59 ) {
    
            cube.jump.maxY += 1;
            cube.jump.speed -= cube.deceleration.y 
            cube.y -= cube.jump.speed;
    
        } else if (cube.jump.maxY >= 60 && cube.jump.maxY < 119) {
    
            cube.jump.maxY +=1;
            cube.jump.speed += cube.deceleration.y 
            cube.y += cube.jump.speed;
    
        } else if (cube.jump.maxY === 119) {
            
            cube.jump.maxY = 0
            cube.jump.state = "no"
    
        }       
    } 
}


function drawGround(){
    push();
    strokeWeight(3);
    line(0, 900, 1000, 900);
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
console.log(keyCode)
}

function keyReleased() {
    if (keyCode == 37 && keyCode !== 39) {
    cube.direction = "none"
    } else if (keyCode == 39 && keyCode !== 37) {
    cube.direction = "none"
    }
}