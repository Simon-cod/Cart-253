
//Creates a variable for the sun
let sun = {
    x: 200,
    y: 80,
    size: 220,
    r: 250,
    g: 150,
    b: 150,
    direction: "none",
    speed: 1
}

let a = undefined;



/**
 * Draws the Sun
 */
function drawSun() {
    push();
    noStroke();
    fill(sun.r, sun.g, sun.b);
    circle(sun.x, sun.y, sun.size);
    pop();
}

/**
 * Moves the Sun
 */
function moveSun() {

    if (sun.direction === "none") {
        sun.x = sun.x //do nothing
    } else if (sun.direction === "left"){ //moves the sun to the left
        sun.x -= sun.speed;
    } else if (sun.direction === "right"){ //moves the sun to the right
        sun.x += sun.speed;
    }

}



function drawLightingScenario() {
    
    if (sun.x <= 500){
    a = map(sun.x, 0 + sun.size/2, -sun.size/2, 0, 255)
    } 
    else  if (sun.x >= 500) {
    
    a = map(sun.x, 1000 - sun.size/2, 1000 + sun.size/2, 0, 255)
    }
    
    let opacity = color(0)

    opacity.setAlpha(a);
    
    push();
    noStroke();
    fill(opacity);
    square(width/2, height/2, 1000)
    pop();

}
