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
    speed: 5,
    state: "none",
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
}

function drawCube() {

    fill(0, 100, 200);
    square (cube.x, cube.y, cube.size);

}

function moveCube() {
    if (cube.state === "none") {
        cube.x = cube.x //nothing
    } else if (cube.state === "right") {
        cube.x += cube.speed;
    } else if (cube.state === "left") {
        cube.x -= cube.speed;
    }
}

function drawGround(){
    push();
    strokeWeight(3);
    line(0, 900, 1000, 900);
    pop();
}

function keyPressed() {
    if (keyCode === 39) {
        cube.state = "right";
    } else if (keyCode === 37){
        cube.state = "left";
    }
console.log(keyCode)
}
console.log(cube.state)

function keyReleased() {
    cube.state = "none"
}