
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

//The annoying bird
let Bird = {
    fill: {
        shade: 0
    },
    x: 15,
    y: 200,
    size: {
        x: 30,
        y: 20
    },
    velocity: {
        x: 0.5,
        y: -1
    },
    acceleration: {
        x: 0.25,
        y: -0.50
    }
};

//The sky's color
let Sky = {
    r: 160,
    g: 180,
    b: 200,
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    
  background(Sky.r, Sky.g, Sky.b);
  
  //Draw the bird AFTER the background
  birdy();

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  // Make his face becomes gradually more red
  mrFurious.fill.g *= 0.999;
  mrFurious.fill.b *= 0.999;

  //Constrain the color
  mrFurious.fill.r = constrain(mrFurious.fill.r, 0, 225);

  //Make the sky become darker
  Sky.r *= 0.999;
  Sky.g *= 0.999;
  Sky.b *= 0.999;
}

function birdy() {
  
  //Draw the bird
  push();
  noStroke();
  fill(100, 100, 100);
  ellipse(Bird.x, Bird.y, Bird.size.x, Bird.size.y);
  pop();

  //Add the velocity to the flight speed
  Bird.x += Bird.velocity.x;
  Bird.y += Bird.velocity.y;

  //Constrain the bird's position
  Bird.x = constrain(Bird.x, 0, 400);
  Bird.y = constrain(Bird.y, 0, 400);

  

  console.log(Bird.x, Bird.y, Bird.size.x, Bird.size.y)
} 