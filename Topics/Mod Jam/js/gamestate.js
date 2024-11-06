
//?Creates a variable to change the game State (titleScreen, start, over)
let gameState = "titleScreen"

/**
 * !Runs the game
 */
function runGame() {

    background("#87ceeb");
    drawHealthyFly();
    moveHealthyFly();
    checkTongueFlyOverlap();
    showNewInfectedFly();
    checkInfectedFlies()
    moveTongue();
    drawTongue();
    drawFrog();
    createLilyPads();
    drawScore();
}

/**
 * ! Creates a Title page (with controls)
 */
function title() {
    background(100, 0, 200);
    push();
    textSize(115);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Poisonous", width/2, 315);
    pop();

    push();
    textSize(105);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Frog", width/2, 445);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Try to catch as many flies as possible,", width/2, 620);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("but don't touch the lily pads!", width/2, 660);
    pop();
    
    push();
    textSize(50);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Controls:", width/2, 800);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Keypad controls the tongue", width/2, 925);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Shift = Speed boost", width/2, 1075);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Space-bar = Reset", width/2, 1225);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("PRESS SPACE-BAR TO START", width/2, 1425);
    pop();

    push();
    textSize(22);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Created by Simon Duchaine Morneau", width/2, 1580);
    pop();

    }

    /**
    * !Draws a score (number of flies eaten)
    */
    function drawScore() {
        //adds the text "score ="
        push();
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0);
        text("score = ", 100, 50);
        pop();
        
        //adds the score
        push();
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0, 0, 255);
        text(score, 190, 50);
        pop();
    }

    /**
     * !Creates a page that appears when you lose the game
     */
    function gameOver() {
        
        //Creates a score that keeps going up, making it look like the flies keep infecting each other and that you completely ruined the ecosystem
        score += 1
        
        //Draws the game over text
        background(100, 0, 200);
        push();
        textSize(105);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text("Game Over", width/2, height/2 - 200);
        pop();
    
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("The poisonous frog contaminated", width/2, (height/2 + 55));
        pop();
    
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("the healthy ecosystem", width/2, (height/2 + 105));
        pop();

        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text("PRESS SPACE-BAR TO RETRY", width/2, 1425);
        pop();

        
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("Score = ", width/2 - 20, (height/2 + 385));
        pop();
        
        //Shows the score (that keeps increasing)
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text(score, width/2 + 70, (height/2 + 385));
        pop();
    
    }