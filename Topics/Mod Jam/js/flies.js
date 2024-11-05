
// TODO Our initial fly
// Has a position, size, and speed of horizontal movement
//Creates coordinate for the inital fly that will always reset
const initialFly = {
    // x: 0,
    x: 0,
    y: 200, // Will be random
    size: 15,
    speed: 3
};
let maxPoisonnedFlies = 2

let maxNumberOfCrazyFlies = 200

// TODO creates a variable for the borders
let border = undefined;

// TODO Creates an empty array for the buggyFlies
let buggyFlies = [];


/**
 * TODO creates a function that draws a new Crazy Fly (Buggy Fly)
 */
function drawsNewCrazyFly() {
    //reatributes the buggyFlies array to another name for the loop and creates a loop the adds fly coordinates to the array and makes  / it move
    for (let crazyFly of buggyFlies) {
       
        moveCrazyFlies(crazyFly);
        drawCrazyFly(crazyFly);
        newCrazyFly();

    }

    }
    
    /**
     * TODO Moves the fly according to its speed
     * TODO Resets the fly if it gets all the way to the right
     */
    function moveFly() {
        // Move the fly
        initialFly.x += initialFly.speed;
        // Handle the fly going off the canvas
        if (initialFly.x > width) {
            resetFly();
        }
    }
    
    /**
     * TODO Makes the buggy Fly move in a crazy way
     */
    function moveCrazyFlies(crazyFly) {
        let border = {
            left: 0,
            right: width,
            up: 0,
            down: height
        }
        
        let firstX = border.left + (crazyFly.size/2);
        let secondX = border.right - (crazyFly.size/2);
        let firstY = border.up + (crazyFly.size/2);
        let secondY = border.down - (crazyFly.size/2);
    
        console.log(buggyFlies)
        crazyFly.x += random(-crazyFly.buzziness, crazyFly.buzziness);
        crazyFly.y += random(-crazyFly.buzziness, crazyFly.buzziness);
    
        crazyFly.x = constrain(crazyFly.x, firstX, secondX);
        crazyFly.y = constrain(crazyFly.y, firstY, secondY);
    }

    function drawCrazyFly(crazyFly) {
    //Draws the provided fly to the canvas
    push();
    noStroke();
    fill(crazyFly.r, crazyFly.g, crazyFly.b);
    ellipse(crazyFly.x, crazyFly.y, crazyFly.size);
    pop();
    }
    
    /**
     * TODO Creates the coordinate for a new buggy Fly
     */
    function newCrazyFly() {
       
        //creates random coordinates and buzziness for each buggyFly 
        let crazyFly = {
            x: random(0, width),
            y: random(0, height),
            size: random(15, 20),
            buzziness: 50,
            r: 0,
            g: 0,
            b: 255
        }; 
    // returns the values of the coordinates we just created
        return crazyFly;
    }
    
    /**
     * TODO Draws the initial fly as a black circle
     */
    function drawFly() {
        
        // flies.push = (
        push();
        noStroke();
        fill("#000000");
        ellipse(initialFly.x, initialFly.y, initialFly.size);
        pop();
        
    }
    
    /**
     * TODO Resets the initial fly to the left with a random y
     */
    function resetFly() {
        initialFly.x = 0;
        initialFly.y = random(200, 300);
    }
    
    
    /**
     * TODO Handles the tongue overlapping the fly and creates a new buggy fly everytume it overlaps, as well as resetting the initial fly location
     */
    function checkTongueFlyOverlap() {
        // Get distance from tongue to fly
        const d = dist(tongueHeadCoordinates.x, tongueHeadCoordinates.y, initialFly.x, initialFly.y);
    

        // Check if it's an overlap
        const eaten = (d < frog.tongue.size/2 + initialFly.size/2);
        if (eaten) {
            //Creates a Buggy Fly
            addsCrazyFlyToTheArray();
            // Reset the fly
            resetFly();
            
            returnsTongue();

           
        }
    }


/**
 * TODO checks the number of crazy flies and decides to enter the ending ohase or to show the game over page
 */ 
function checkCrazyFlies() {
    let numberOfCrazyFlies = buggyFlies.length;

    if (numberOfCrazyFlies >= maxNumberOfCrazyFlies) {
        gameState = "over"
    } else if (numberOfCrazyFlies >= maxPoisonnedFlies){
        addsCrazyFlyToTheArray()
     }
}

/** 
     * TODO Adds a new buggy Fly coordinates to the biggyFlies Array
     */
    
function addsCrazyFlyToTheArray() {
    let randomFly = newCrazyFly();
    buggyFlies.push(randomFly)
    score += 1
}
