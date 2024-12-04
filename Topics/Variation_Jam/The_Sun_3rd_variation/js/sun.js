
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

//creates a variable that we will use for mapping later on
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


/**
 * Maps the sun positions and decreases the lighting of the game as the sun leaves the canvas
 */
function drawLightingScenario() {
    
    //if the sun leaves the canvas from the left side
    if (sun.x <= 500){
    //maps as the sun leaves the canvas to te left and attributes it to a value from 0 to 255
    a = map(sun.x, 0 + sun.size/2, -sun.size/2, 0, 255)
    } 
    //if the sun leaves the canvas from the right side
    else  if (sun.x >= 500) {
    //maps as the sun leaves the canvas to the right and attributes it to a value from 0 to 255
    a = map(sun.x, 1000 - sun.size/2, 1000 + sun.size/2, 0, 255)
    }

    //makes you win the game if the game is completely plunged into darkness
    if (a === 255) {
        gameState = "gameWon"
    }
    
    //attriutes the color black to a new variable called opacity (that will be used in the fill function later on)
    let opacity = color(0)

    //sets the alpha opacity of the color of opacity to the map of the sun that we did earlier
    opacity.setAlpha(a);

    //draws a black square in front of the canvas that decreases opacity based on the sun's position
    push();
    noStroke();
    fill(opacity);
    square(width/2, height/2, 1000)
    pop();

}
