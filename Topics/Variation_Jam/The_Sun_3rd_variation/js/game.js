
//creates a vraiable for the ending platform
endplatform = {
    x: 960,
    y: 377,
    width: 40,
    height: 10,
}

/**
 * regroups all the functions about the game
*/
function gameMechanics() {
    drawEndPlatform();
}

/**
 * draws the ending platforn
*/
function drawEndPlatform() {
    push;
    noStroke();
    fill (250, 250, 250);
    rect(endplatform.x, endplatform.y, endplatform.width, endplatform.height);

}

/**
 * draws the titleScreen
*/
function title() {

    background(100, 0, 0);
    push();
    textSize(200);
    textAlign(CENTER, TOP);
    fill(0);
    text("The Sun", width/2, 140);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(0);
    text("3rd variation", width/2, 330);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("You are a god and control the sun!  ", width/2, 400);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("How can you ruin the journey of the hero and the villain?", width/2, 440);
    pop();
    
    push();
    textSize(50);
    textAlign(CENTER, TOP);
    fill(0);
    text("Controls:", width/2, 520);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Left & Right Arrow to move the Sun", width/2, 625);
    pop();

    
    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("PRESS SPACE-BAR TO START", width/2, 920);
    pop();

    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(0);
    text("Created by Simon Duchaine Morneau", width/2, 815);
    pop();

}

/**
 * draws the Winning Screen
*/
function gameWon() {
    
    background(0, 0, 0);
    push();
    textSize(150);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Game Won!", width/2, height/2 - 200);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("The hero and the villain are plunged into darkness, ", width/2, 475);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text(" blind and powerless. ", width/2, 515);
    pop();


}