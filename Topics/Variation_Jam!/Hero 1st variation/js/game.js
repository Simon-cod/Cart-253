
//creates a vraiable for the ending platform
endplatform = {
    x: 960,
    y: 377,
    width: 40,
    height: 10,
}


function gameMechanics() {
    drawEndPlatform();
    checkOverlapHeroEndPlatform();
}

function drawEndPlatform() {
    push;
    noStroke();
    fill (250, 250, 250);
    rect(endplatform.x, endplatform.y, endplatform.width, endplatform.height);

}

function checkOverlapHeroEndPlatform(){


 // checking if each side of the platforms overlap with the hero
 if (
    endplatform.y + endplatform.height / 2 >= hero.y - hero.h / 2 && // rect1 bottom and hero top
    endplatform.y - endplatform.height / 2 <= hero.y + hero.h / 2 &&   // rect1 top and hero bottom
    endplatform.x + endplatform.width / 2 >= hero.x - hero.w / 2 && // rect1 right and hero left
    endplatform.x - endplatform.width / 2 <= hero.x + hero.w / 2 // rect1 left and hero right 
    ){

     gameState = "gameWon"   

    }
}

function title() {

    background(100, 0, 0);
    push();
    textSize(200);
    textAlign(CENTER, TOP);
    fill(0);
    text("The Hero", width/2, 150);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(0);
    text("1st variation", width/2, 350);
    pop();

    push();
    textSize(35);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Try to reach the white platform, but don't touch the lava!", width/2, 425);
    pop();
    
    push();
    textSize(50);
    textAlign(CENTER, TOP);
    fill(0);
    text("Controls:", width/2, 500);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Left & Right Arrow to move the hero", width/2, 600);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Up Arrow to jump", width/2, 675
    );
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Shift for a speed boost", width/2, 750);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("PRESS SPACE-BAR TO START", width/2, 920);
    pop();

    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(0);
    text("Created by Simon Duchaine Morneau", width/2, 830);
    pop();

}

function gameWon() {
    
    background(100, 0, 0);
    push();
    textSize(150);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Game Won!", width/2, height/2 - 200);
    pop();

}