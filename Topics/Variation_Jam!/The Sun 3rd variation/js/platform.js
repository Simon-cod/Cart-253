

//Creates an array for the platforms
let platforms = [

    {
        x: 500,
        y: 900,
        //the amount of blue of the platform
        b: 0,
        //the amount of red of the platform 
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
        x: 600,
        y: 392,
        b: 0,
        r: 0,
        width: 250,
        height: 35 
    },
    {
        x: 800,
        y: 399,
        b: 0,
        r: 0,
        width: 160,
        height: 21
    },
    {
        x: 1000,
        y: 391.9,
        b: 0,
        r: 0,
        width: 247,
        height: 35
    }
];

/**
 * Creates the platforms
*/
function createPlatforms() {
//creates a loop with the variable platform (that changes vallues depending on the array)
    for(let platform of platforms) {
    drawPlatform(platform);
}
}
/**
 * draws the platforns
*/
function drawPlatform(platform) {

    push();
    fill(platform.r, 0, platform.b);
    rect(platform.x, platform.y, platform.width, platform.height);
    pop();
};
