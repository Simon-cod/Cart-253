
// !Creates an Array for the three lily pads
let lilyPads = [
    {
        x: 600,
        y: 406,
        size: 130,
        speed: 2, //the speed at which the lily pad will move across the screen
        direction: "left", //the direction in which the lily pad will start moving (left or right)
        rotationSpeed: -2, //the speed at which the lily pad will rotate
        slitSize: 22, //the size of the litle slit graphic drawn on the lily pad
        angle: 0, //the angle at which the slit graphic will be drawn on the lily pad
        r: 0, 
        g: 215,
        b: 150,
    },
    {
        x: 200,
        y: 620,
        size: 60,
        speed: 2,
        direction: "right",
        rotationSpeed: -3,
        slitSize: 12,
        angle: 25,
        r: 0, 
        g: 190,
        b: 150,
    },
    {
        x: 0,
        y: 812,
        size: 150,
        speed: 5,
        direction: "right",
        angle: 120,
        rotationSpeed: 1.2,
        slitSize: 9,
        r: 0, 
        g: 200,
        b: 150
    },
    {
        x: 450,
        y: 1060,
        size: 60,
        speed: 6,
        direction: "left",
        rotationSpeed: -3,
        slitSize: 8,
        angle: 75,
        r: 0, 
        g: 165,
        b: 150,
    },
    {
        x: 600,
        y: 1218,
        size: 100,
        speed: 3,
        direction: "left",
        angle: 210,
        rotationSpeed:-2.6,
        slitSize: 12,
        r: 0, 
        g: 175,
        b: 150
    },
];

/**
 * !Draws and moves the lilypads
 */
function createLilyPads() {
   
    //attributes the lilyPads array elements to the new lilyPad variable in order
    for (let lilyPad of lilyPads) {
        drawLilyPad(lilyPad)
        movelilyPad(lilyPad)
        checkTongueLilyPadOverlap(lilyPad)
    };

}

/**
 * !Draws the lilypads and makes them roate
 */
function drawLilyPad(lilyPad) {
    
    //Draws the lily pad circle
    push();
    fill(lilyPad.r, lilyPad.g, lilyPad.b);
    //makes the stroke around the lily pad darker than it's color
    stroke(lilyPad.r - 80, lilyPad.g - 80, lilyPad.b - 80);
    strokeWeight(2)
    ellipse(lilyPad.x, lilyPad.y, lilyPad.size);
    pop();
    
    //Creates a slit in the lily pad
    push();
    //Changes the origins to the center of the lily pad
    translate(lilyPad.x, lilyPad.y);
    //Changes the angle mode to degrees
    angleMode(DEGREES);
    //rotates each lily pad in a different angle
    rotate(lilyPad.angle);
    //rotates each lily pad at a different speed
    rotate(frameCount * lilyPad.rotationSpeed);
    //Draws lines with different colors depending on the lily pad
    stroke(lilyPad.r - 80, lilyPad.g - 80, lilyPad.b - 80);
    strokeWeight(2);
    //Draws two lines to create a slit graphic in the lily pad
    line(0, 0, lilyPad.size/2,0);
    line(0, 0, lilyPad.size/2, lilyPad.slitSize);
    pop();
}

/**
 * !Moves the lilypads
 */
function movelilyPad (lilyPad) {

    //Assign a direction to the right if the lily pad goes too far left
    if (lilyPad.x < 0) {
    lilyPad.direction = "right"
    } //Assigns a direction to the left if the lily pad goes too far right
    else if (lilyPad.x > width) {
    lilyPad.direction = "left"
    };
   
    //makes the lilypads go to the right (adds an x value (depending on the lily pad's speed) every frame)
    if (lilyPad.direction === "right") {
        lilyPad.x += lilyPad.speed;
    } else 
    //makes the lilypads go to the left (removes an x value (depending on the lily pad's speed) every frame)
    if (lilyPad.direction === "left") {
        lilyPad.x -= lilyPad.speed;
    }
 }

 /**
 * !Checks the distance between the tongue's head and makes the tongue go back if the tongue touches the lily pads
 */
 function checkTongueLilyPadOverlap(lilyPad) {

    //checks the distance between the tongue head and the lily pad and assign it to a new variable
    let distance = dist(tongueHeadCoordinates.x, tongueHeadCoordinates.y, lilyPad.x, lilyPad.y);
    

   // Creates a variable that is only true if the tongue overlaps the lily pad
    const hit = (distance < frog.tongue.size/2 + lilyPad.size/2);
    //Check if the variable is true/if it's an overlap
    if (hit) {
        //returns the tongue to the frog's body
        frog.tongue.direction = "goingBack"
}
}
