//Creates an array for the rectangles (grounds)
let rectangles = [

    {
        x: 500,
        y: 815,
        b: 0,
        width: 1000,
        height: 30 
    },
    {
        x: 800,
        y: 725,
        b: 0,
        width: 400,
        height: 30 
    },
    {
        x: 300,
        y: 600,
        b: 0,
        width: 600,
        height: 30 
    },
    {
        x: 800,
        y: 525,
        b: 0,
        width: 400,
        height: 30 
    },
];

//Creates the rectangles
function createRectangles() {
for(let rect1 of rectangles) {
    checkOverlapGroundHero(rect1);
    drawRectangle(rect1);
}
}

/**
 * chack if the hero overlaps with the second ground (rectangle 1)
*/
function checkOverlapGroundHero(rect1) {
    // checking if each side of the rectangles overlap/touch
    if (
       rect1.y + rect1.height / 2 >= cube.y - cube.h / 2 && // rect1 bottom and cube top
       rect1.y - rect1.height / 2 <= cube.y + cube.h / 2 &&   // rect1 top and cube bottom
       rect1.x + rect1.width / 2 >= cube.x - cube.w / 2 && // rect1 right and cube left
       rect1.x - rect1.width / 2 <= cube.x + cube.w / 2 // rect1 left and cube right 
       ){
           rect1.b = 255;
           // cube.direction = "none";
           cube.jump.state = "no";
           cube.jump.direction = "none";
           cube.jump.speed = 9;
           cube.jump.y = 0;
           cube.y = rect1.y - rect1.height/2 - cube.size/2;
       } 
   else if (cube.y === rect1.y - rect1.height/2 - cube.size/2 && cube.jump.state === "no"){
      fallingOff();
       rect1.b = 0;
   } else {
       rect1.b = 0;
   }
   }

   /**
 * what happens if a hero falls off from a platform
*/
function fallingOff() {
    cube.jump.direction = "down";
    cube.jump.speed = 0.3;
    cube.jump.state = "active";
}
   /**
 * draws the rectacngle that serves as a second ground
*/
function drawRectangle(rect1) {

    push();
    fill(0, 0, rect1.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);
    pop();
};