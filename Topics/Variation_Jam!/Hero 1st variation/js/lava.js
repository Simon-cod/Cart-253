
//creates a variable for the lava
let lava = {
    x: 800,
    y: 382,
    r: 255,
    g: 120,
    b: 0,
    width: 150,
    height: 15
}


/**
 * Draws the pool of lava
 */
function drawPoolofLava() {
    push();
    fill(lava.r, lava.g, lava.b);
    rect(lava.x, lava.y, lava.width, lava.height)
    pop();
}

/**
 * Draws the pool of lava
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
 * resets the cube to it's starting position when it dies
 */
function heroDeath() {
    hero.x = 40;
    hero.y = 785;
}