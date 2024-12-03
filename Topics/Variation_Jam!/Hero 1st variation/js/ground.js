
let walls = [ 
    {
        x: 697,
        y: 740,
        g: 50,
        width: 8,
        height: 118
    },
    {
     x: 600,
     y: 600,
     g: 50,
     width: 8,
     height: 59
    },
    {
     x: 200,
     y: 520,
     g: 50,
     width: 8,
     height: 99 
    },
    {
        x: 510,
        y: 390,
        g: 50,
        width: 8,
        height: 29 
    }
   
]

//Creates an array for the rectangles (grounds)
let rectangles = [

    {
        x: 500,
        y: 900,
        b: 0,
        r: 0,
        width: 1000,
        height: 200 
    },
    {
        x: 850,
        y: 740,
        b: 0,
        r: 0,
        width: 300,
        height: 120 
    },
    {
        x: 300,
        y: 600,
        b: 0,
        r: 0,
        width: 600,
        height: 60 
    },
    {
        x: 100,
        y: 520,
        b: 0,
        r: 0,
        width: 200,
        height: 100 
    },
    {   
        x: 860,
        y: 390,
        b: 0,
        r: 0,
        width: 700,
        height: 30 }
];

//Creates the rectangles
function createRectangles() {
for(let rect1 of rectangles) {
    checkOverlapGroundHero(rect1);
    drawRectangle(rect1);
}
}

function createWalls() {
    for( let wall of walls) {
        checkOverlapWallHero(wall)
        drawWall(wall)
    }
}

/**
 * check if the hero overlaps with the second ground (rectangle 1)
*/
function checkOverlapGroundHero(rect1) {
    // checking if each side of the rectangles overlap/touch
    console.log(cube.x, cube.y)
    if (
       rect1.y + rect1.height / 2 >= cube.y - cube.h / 2 && // rect1 bottom and cube top
       rect1.y - rect1.height / 2 <= cube.y + cube.h / 2 &&   // rect1 top and cube bottom
       rect1.x + rect1.width / 2 >= cube.x - cube.w / 2 && // rect1 right and cube left
       rect1.x - rect1.width / 2 <= cube.x + cube.w / 2 // rect1 left and cube right 
       ){
           rect1.b = 255;
           rect1.r = 0;
           // cube.direction = "none";
            //cube.jump.state = "no";//
           //cube.jump.direction = "none";
           cube.jump.y = 0;
           cube.jump.speed = 9;
           cube.y = rect1.y - rect1.height/2 - cube.size/2;
       } 
       //if the cube jumps off the platform
       else if (cube.y === rect1.y - rect1.height/2 - cube.size/2 && cube.jump.state === "active"){
      jumpingOff();
       rect1.b = 0;
       rect1.r = 255;
       //if the cube falls off the platform
   } else if (cube.y === rect1.y - rect1.height/2 - cube.size/2 && cube.jump.state !== "active"){
        fallingOff();
       rect1.b = 255;
       rect1.r = 255;
   } else {
    rect1.b = 0;
    rect1.r = 0;
   }
   }

   function checkOverlapWallHero(wall) {
    // checking if each side of the rectangles overlap/touch
    console.log(cube.x, cube.y)
    
    if (cube.x > wall.x) {

    if (
       wall.y + wall.height / 2 >= cube.y - cube.h / 2 && // rect1 bottom and cube top
       wall.y - wall.height / 2 <= cube.y + cube.h / 2 &&   // rect1 top and cube bottom
       wall.x + wall.width / 2 >= cube.x - cube.w / 2 && // rect1 right and cube left
       wall.x - wall.width / 2 <= cube.x + cube.w / 2 // rect1 left and cube right 
       ){
           wall.g = 200;
           cube.x = wall.x + wall.width/2 + cube.size/2;
           
           if (cube.jump.state === "active"){
            jumpingOff();
        }

       }  else {
        wall.g = 50
       }

    } else if (cube.x < wall.x){

        if (
            wall.y + wall.height / 2 >= cube.y - cube.h / 2 && // rect1 bottom and cube top
            wall.y - wall.height / 2 <= cube.y + cube.h / 2 &&   // rect1 top and cube bottom
            wall.x + wall.width / 2 >= cube.x - cube.w / 2 && // rect1 right and cube left
            wall.x - wall.width / 2 <= cube.x + cube.w / 2 // rect1 left and cube right 
            ){
                wall.g = 200;
                cube.x = wall.x - wall.width/2 - cube.size/2;

                if (cube.jump.state === "active"){
                    jumpingOff();
                }
               
            }  else {
             wall.g = 50
            }

    }
   }

    /**
    * what happens if a hero jumps off from a platform
    */
function jumpingOff() {
    cube.jump.y = cube.jump.maxY - 1
    cube.jump.direction = "down"
   
}

    /**
    * what happens if a hero falls off from a platform
    */
function fallingOff() {
    cube.jump.state = "active";
    cube.deceleration.y = 0.55
    cube.jump.y = cube.jump.maxY
    cube.jump.speed = 0.3
   
}
   /**
 * draws the rectacngle that serves as a second ground
*/
function drawRectangle(rect1) {

    push();
    fill(rect1.r, 0, rect1.b);
    rect(rect1.x, rect1.y, rect1.width, rect1.height);
    pop();
};

function drawWall(wall) {
    push();
    fill(0, wall.g, 0);
    rect(wall.x, wall.y, wall.width, wall.height);
    pop()
}