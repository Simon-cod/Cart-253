
//creates a variable for the lava
let lava = {
    x: 800,
    y: 388,
    r: 255,
    g: 120,
    b: 0,
    width: 150,
    height: 17
}

//creates a variable for the fireBall
let fireBall = {
    x: 800,
    y: 385,
    r: 255,
    g: 120,
    b: 0,
    size: 15,
    minY: 385,
    speed: 7,
    gravity: 0.2,
    shooting: {
        speed: 2,
        direction: "none",
        acceleration: 0.14,
    },
    state: "bouncing"
}

/**
 * Regroups all of the lava functions
 */
function createLava() {
    drawPoolofLava();
    drawFireBall();
    fireBallBounce();
    deadlyFireBall();
    moveShootingFireBall();
    constrainFireBallInsideCanvas();
}


/**
 * Draws the pool of lava
 */
function drawPoolofLava() {
    
    //draws an orange pool of lava
    push();
    noStroke();
    fill(lava.r, lava.g, lava.b);
    rect(lava.x, lava.y, lava.width, lava.height)
    pop();
}

/**
 * Draws the fire ball
 */
function drawFireBall() {
    push();
    noStroke();
    fill(fireBall.r, fireBall.g, fireBall.b),
    circle(fireBall.x, fireBall.y, fireBall.size)
    pop();

}

/**
 * Makes the fire ball that got shot move depending on the keyboard and increase speed overtime
 */
function moveShootingFireBall() {

    if (fireBall.state === "shooting"){

        //makes the fireBall accelerate over time, making it harder to control
        fireBall.shooting.speed += fireBall.shooting.acceleration;

        if (fireBall.shooting.direction === "none"){
        //do nothing
        } else if (fireBall.shooting.direction === "right"){

        fireBall.x += fireBall.shooting.speed

        } else if (fireBall.shooting.direction === "left"){
        fireBall.x -= fireBall.shooting.speed

        } else if (fireBall.shooting.direction === "up"){
        fireBall.y -= fireBall.shooting.speed

        } else if ( fireBall.shooting.direction === "down"){
        fireBall.y += fireBall.shooting.speed
        }
    }
}

/**
 * Makes the initial fire ball bounce
 */
function fireBallBounce() {
    
    if (fireBall.state === "bouncing"){
    //if fire Ball is in it's initial position, it goes up
    if (fireBall.y <= fireBall.minY) {
    
        fireBall.speed -= fireBall.gravity
        fireBall.y -= fireBall.speed
    } else { //whem the fire Ball drops lower than it's initial position, it sets back to it's initial position
        fireBall.y = fireBall.minY
        fireBall.speed = random(6, 9)
        
    }
}
}

/**
 * kills the hero and wins the game if the fire ball touches him
 */
function deadlyFireBall() {
    
    // Get the distance from the cube to the firefly and apply it to a new variable
    const distance = dist(hero.x, hero.y, fireBall.x, fireBall.y);
    
    // Creates a variable that is only true if the hero touches the fireBall
    const eaten = (distance < hero.size/2 + fireBall.size/2);
   
    //kills the hero if it overlaps the fireBall
    if (eaten) {
        heroDeath();
    }
}

/**
 * Makes the fireBall resets if it goes too far outside the canvas
 */
function constrainFireBallInsideCanvas() {
    if(fireBall.x < -100 || fireBall.x > 1100) { //if it goes outside the canvas to the right or the left
        fireBallDeath();
    } else if (fireBall.y < -100 || fireBall.y > 1100) { //if it goes outside the canvas up or down
        fireBallDeath();
    }
}

/**
 * makes the fireBall resets and restart bouncing
 */
function fireBallDeath() {
    //resets everything to it's initial state
    fireBall.state = "bouncing"
    fireBall.y = fireBall.minY + 1;
    fireBall.x = 800;
    fireBall.shooting.speed = 2
}

/**
 * makes you win the game if you kill the hero!
 */
function heroDeath() {
    gameState = "gameWon"
}