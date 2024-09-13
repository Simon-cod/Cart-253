/**
 * Movement variables   
 * Simon Duchaine Morneau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let bird = {
    x: 120,
    y: 480,
    size: 50,
    // NEW! We've added a velocity property to track the bird's velocity
    velocity: {
        x: 0,
        y: 0
    },
     // NEW! The minimum velocity for x and y movement. Note that it's NOT ZERO
    // because we use negative x velocity to move left and negative y
    // velocity to move up
    minVelocity: {
        // Sort of assuming that birds move faster horizontally than vertically...
        // But maybe that's not true...
        x: -3,
        y: -2  
      },
      // NEW! Same again with the maximum velocity
      maxVelocity: {
          x: 3,
          y: 2
      },
    // NEW! We now have acceleration properties, these will be ADDED to the
    // velocity every frame
    acceleration: {
        x: 0.025,
        // The y acceleration is negative so the bird will go UP
        y: -0.05
    }
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

        background(0);
        
    // NEW Change the bird's velocity by adding its acceleration to its
    // velocity
    // You can see it's the same idea as with changing the position using
    // the velocity. We change the velocity using the acceleration.
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;


    // NEW! Constrain the bird's velocity
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);

        // Move the bird by adding its velocity in x and y
        // Note that we always ADD velocity, so we use positive and negative
        // velocities to control direction
        bird.x += bird.velocity.x;
        bird.y += bird.velocity.y;
        
        // Draw the bird
        ellipse(bird.x, bird.y, bird.size);
}