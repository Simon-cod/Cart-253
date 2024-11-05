
//?Creates a variable to vhange the game State (titleScreen, start, over)
let gameState = "titleScreen"

/**
 * !Starts the game
 */
function runsGame() {

    background("#87ceeb");
    moveFly();
    drawFly();
    moveTongue();
    drawTongue();
    drawFrog();
    checkTongueFlyOverlap();
    drawsNewCrazyFly()
    createLilyPads()
    drawScore()
    checkCrazyFlies()
}

/**
 * !Title page (with controls)
 */
function title() {
    background(100, 0, 200);
    push();
    textSize(110);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Venomous", width/2, 330);
    pop();

    push();
    textSize(100);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Frog", width/2, 450);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("Try to catch as many flies as possible,", width/2, 580);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 255, 255);
    text("but don't touch the lily pads!", width/2, 620);
    pop();
    
    push();
    textSize(50);
    textAlign(CENTER, TOP);
    fill(0, 255, 255);
    text("Controls:", width/2, 750);
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
    * !Keeps a score (number of flies eaten)
    */
    function drawScore() {

        push();
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0);
        text("score = ", 100, 50);
        pop();
    
        push();
        textSize(40);
        textAlign(CENTER, TOP);
        fill(0, 0, 255);
        text(score, 190, 50);
        pop();
    }
    /**
     * !Title page that appears when you lose the game
     */
    function gameOver() {
        
        score += 1
        
        background(100, 0, 200);
        push();
        textSize(100);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text("Game Over", width/2, height/2);
        pop();
    
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("The venomous frog contaminated", width/2, (height/2 + 135));
        pop();
    
        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(200, 255, 255);
        text("the healthy ecosystem", width/2, (height/2 + 185));
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

        push();
        textSize(30);
        textAlign(CENTER, TOP);
        fill(0, 255, 255);
        text(score, width/2 + 70, (height/2 + 385));
        pop();
    
    }