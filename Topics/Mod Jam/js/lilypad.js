// !Creates an Array for the three lily pads
let lilyPads = [
    {
        x: 600,
        y: 406,
        size: 130,
        speed: 2,
        direction: "left",
        rotationSpeed: -2,
        slipSize: 22,
        angle: 0,
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
        slipSize: 12,
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
        slipSize: 9,
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
        slipSize: 8,
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
        slipSize: 12,
        r: 0, 
        g: 175,
        b: 150
    },
];
/**
 * !Draws and moves the lilypads
 */
function createLilyPads() {
   
    for (let lilyPad of lilyPads) {
        drawLilyPads(lilyPad)
        movelilyPads(lilyPad)
        checkTongueLilyPadsOverlap(lilyPad)
    };

}



/**
 * !Draws the lilypads and makes them them roate
 */
function drawLilyPads(lilyPad) {
    //Draws the lily pads
    push();
    fill(lilyPad.r, lilyPad.g, lilyPad.b);
    stroke(lilyPad.r - 80, lilyPad.g - 80, lilyPad.b - 80);
    strokeWeight(2)
    ellipse(lilyPad.x, lilyPad.y, lilyPad.size);
    pop();
    
    //Creates a slip in the lily pads
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
    line(0, 0, lilyPad.size/2,0);
    line(0, 0, lilyPad.size/2, lilyPad.slipSize);
    pop();
}

/**
 * !Moves the lilypads
 */
function movelilyPads(lilyPad) {

    //Assign a direction to the right if the lily pad goes too far left
    if (lilyPad.x < 0) {
    lilyPad.direction = "right"
    } //Assigns a direction to the left if the lily pad goes too far right
    else if (lilyPad.x > width) {
    lilyPad.direction = "left"
    };
   
    //makes the lilypads go to the right (adds an x value every frame)
    if (lilyPad.direction === "right") {
        lilyPad.x += lilyPad.speed;
    } else 
    //makes the lilypads go to the left (removes an x value every frame)
    if (lilyPad.direction === "left") {
        lilyPad.x -= lilyPad.speed;
    }
 }

 /**
 * !Checks the distance between the tongue's head and makes the tongue go back if the tongue touches the lily pads
 */
 function checkTongueLilyPadsOverlap(lilyPad) {

    let distance = dist(tongueHeadCoordinates.x, tongueHeadCoordinates.y, lilyPad.x, lilyPad.y);
    

    // Check if it's an overlap
    const hit = (distance < frog.tongue.size/2 + lilyPad.size/2);
    if (hit) {
        frog.tongue.direction = "goingBack"
}
}
