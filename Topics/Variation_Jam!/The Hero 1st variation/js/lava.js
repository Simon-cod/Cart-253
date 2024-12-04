
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
    gravity: 0.2
}

/**
 * Regroups all of the lava functions
 */
function createLava() {
    drawPoolofLava();
    deadlyLava();
    drawFireBall();
    fireBallBounce();
    deadlyFireBall();
}


/**
 * Draws the pool of lava
 */
function drawPoolofLava() {
    
    //draws a black rectangle to connect the platforms
    push();
    fill(0);
    rect(800, 399, 160, 21)
    pop();

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
 * Makes the fire ball bounce
 */
function fireBallBounce() {
    
    if (fireBall.y <= fireBall.minY) {
    
        fireBall.speed -= fireBall.gravity
        fireBall.y -= fireBall.speed
    } else {
        fireBall.y = fireBall.minY
        fireBall.speed = random(6, 9)
        
    }
}




/**
 * kills the hero if he touches the lava
 */
function deadlyLava() {
    if (
        lava.y + lava.height / 2 >= hero.y - hero.h / 2 && // lava bottom and hero top
        lava.y - lava.height / 2 <= hero.y + hero.h / 2 &&   // lava top and hero bottom
        lava.x + lava.width / 2 >= hero.x - hero.w / 2 && // lava right and hero left
        lava.x - lava.width / 2 <= hero.x + hero.w / 2 // lava left and hero right 
        ){
            
    heroDeath()
}
}

/**
 * kills the hero if he touches the fire ball
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
 * resets the cube to it's starting position when it dies
 */
function heroDeath() {
    hero.x = 40;
    hero.y = 785;
    hero.jump.state = "no"
}