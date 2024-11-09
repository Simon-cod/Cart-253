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
        speed: 2,
        maxY: 0
    },
    acceleration: {
        x: 2,
        y: 2
    },
    state: "none",
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
console.log(cube.state)
}

function drawCube() {

    fill(0, 100, 200);
    square (cube.x, cube.y, cube.size);

}

function moveCube() {
if (cube.action === "walking") {
    
    if (cube.state === "none") {
        cube.x = cube.x //nothing
    } else if (cube.state === "right") {
        cube.x += cube.speed.x;
    } else if (cube.state === "left") {
        cube.x -= cube.speed.x;
  
    }
} else if (cube.action === "jump") {

        if (cube.jump.maxY < 40 ) {
        cube.jump.maxY += 1;
        cube.y -= cube.jump.speed;
    } else if (cube.jump.maxY >= 40 && cube.jump.maxY < 80) {
        cube.jump.maxY +=1;
        cube.y += cube.jump.speed;
    } else if (cube.jump.maxY === 80) {
        
        cube.jump.maxY = 0
        cube.action = "walking"
        
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
        cube.state = "right";
    } else if (keyCode === 37) { //left arrow
        cube.state = "left";
    } else if (keyCode === 38) { //up arrow
        cube.action = "jump";
    }
console.log(keyCode)
}

function keyReleased() {
    cube.state = "none"
}