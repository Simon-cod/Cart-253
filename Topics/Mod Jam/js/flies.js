
// TODO Our healthy fly
// Has a position, size, and speed of horizontal movement
// Creates a coordinate for the healthy fly that will always reset (at a diferent y)
const healthyFly = {
    x: 0,
    y: 200, // Will be random
    size: 12,
    speed: 3
};
// TODO creates a variable for the maximum of poisonned flies allowed (before the game ends)
let maxInfectedFlies = 5

// TODO creates a variable for the maximum number of crazy flies that swarms before the game crashes and ends
let maxNumberOfCrazyFlies = 650

// TODO Creates an empty array for the infectedFlies
let infectedFlies = [];


/**
 * TODO creates a function that draws and moves a new Infected Fly
 */
function showNewInfectedFly() {
    //reatributes the infectedFlies array to another name for the loop and creates a loop that adds fly coordinates to the array and makes it move
    for (let infectedFly of infectedFlies) {
       
        moveInfectedFlies(infectedFly);
        drawInfectedFly(infectedFly);
        newInfectedFly();

    }
}
    
    /**
     * TODO Moves the healthy fly according to its speed
     * TODO Resets the healthy fly if it gets all the way to the right
     */
    function moveHealthyFly() {
        // Move the fly
        healthyFly.x += healthyFly.speed;
        // Handle the fly going off the canvas
        if (healthyFly.x > width) {
            resetHealthyFly();
        }
    }
    
    /**
     * TODO Makes the infected flies move in a crazy way
     */
    function moveInfectedFlies(infectedFly) {
        //defines a variable for the borders of the canvas (easier to read)
        let border = {
            left: 0,
            right: width,
            up: 0,
            down: height
        }
        
        //calculates the x and y coordinates where the fly body touches the border of the canvas
        let firstX = border.left + (infectedFly.size/2);
        let secondX = border.right - (infectedFly.size/2);
        let firstY = border.up + (infectedFly.size/2);
        let secondY = border.down - (infectedFly.size/2);
    
        //calculates a random coordinates for the infected fly to appear and move to
        infectedFly.x += random(-infectedFly.buzziness, infectedFly.buzziness);
        infectedFly.y += random(-infectedFly.buzziness, infectedFly.buzziness);
    
        //constrains the infected fly coordinates between the borders of the canvas
        infectedFly.x = constrain(infectedFly.x, firstX, secondX);
        infectedFly.y = constrain(infectedFly.y, firstY, secondY);
    }

    
    /**
     * TODO Creates the coordinate for a new infected Fly
     */
    function newInfectedFly() {
       
        //creates random coordinates, size and buzziness for each infectedFly 
        let infectedFly = {
            x: random(0, width),
            y: random(0, height),
            size: random(12, 15),
            buzziness: random(10, 20),
            r: 0,
            g: 0,
            b: 255
        }; 
    // returns the values of the coordinates we just created
        return infectedFly;
    }

    /** 
     * TODO Adds a new buggy Fly coordinates to the biggyFlies Array
     */
    function addsInfectedFlyToTheArray() {
    
    infectedFlies.push(newInfectedFly())
    score += 1
    
    }

    /**
     * TODO Draws the infected fly
     */
    function drawInfectedFly(infectedFly) {
        //Draws the provided infected fly to the canvas
        push();
        noStroke();
        fill(infectedFly.r, infectedFly.g, infectedFly.b);
        ellipse(infectedFly.x, infectedFly.y, infectedFly.size);
        pop();
        }

    /**
     * TODO Draws the healthy fly as a black circle
     */
    function drawHealthyFly() {
        
        //Draws the healthy fly
        push();
        noStroke();
        fill("#000000");
        ellipse(healthyFly.x, healthyFly.y, healthyFly.size);
        pop();
        
    }
    
    /**
     * TODO Resets the initial fly to the left with a random y
     */
    function resetHealthyFly() {
        //resets the healthy fly x coordinates to the left of the canvas
        healthyFly.x = 0;
        //resets the healthy fly y coordinates to a random y between 200 and 300 (at the top of the canvas)
        healthyFly.y = random(200, 300);
    }
    
    /**
     * TODO Handles the tongue overlapping the healthy fly and creates a new infected fly everytime it overlaps, as well as resetting the healthy fly location
     */
    function checkTongueFlyOverlap() {
        
        // Get the distance from the tongue head to the healthy fly and apply it to a new variable
        const distance = dist(tongueHeadCoordinates.x, tongueHeadCoordinates.y, healthyFly.x, healthyFly.y);
    
        // Creates a variable that is only true if the tongue overlaps the fly
        const eaten = (distance < frog.tongue.size/2 + healthyFly.size/2);
        //Check if the variable is true/if it's an overlap
        if (eaten) {
            //Creates a new infected Fly
            addsInfectedFlyToTheArray();
            // Reset the normal fly position
            resetHealthyFly();
            // Returns the tongue to the frog's body
            returnsTongue();
        }
    }


/**
 * TODO checks the number of crazy flies and decides to enter the ending phase or to show the game over page
 */ 
function checkInfectedFlies() {
    let numberOfInfectedFlies = infectedFlies.length;

    if (numberOfInfectedFlies >= maxNumberOfCrazyFlies) {
        gameState = "over"
    } else if (numberOfInfectedFlies >= maxInfectedFlies){
        addsInfectedFlyToTheArray()
     }
}
