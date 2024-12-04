
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
 * makes you win the game if you kill the hero!
 */
function heroDeath() {
    gameState = "gameWon"
}