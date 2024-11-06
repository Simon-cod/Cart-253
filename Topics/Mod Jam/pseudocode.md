# Pseudocode for Poisonous frog

```
frog
    body
        x: 320 // Halfway across a 640x480 canvas
        y: 480 // Bottom of a 640x480 canvas
        size: 100 // Diameter of the frog circle
    tongue
        x: 320 //Center of canvas
        y: 480 // At the bottom (important to draw it BEHIND the frog)
        size: 20 // The tip of the tongue
        speed: 20 // Speed the tongue movies in pixels/second
        direction: none // At the start the tongue hasn't been launched

fly
    x: 0 // The left
    y: 200? // This will be a random position...
    size: 10 // Small?
    speed: 3 // How fast it moves across the screen

setup()
    Create a 640x480 canvas

draw()
    Draw the background // Probably just blue or something
    moveFly()
    drawFly()
    moveFrog()
    moveTongue()
    drawFrog()
    drawTongue()
    checkTongueFlyOverlap()
    addscrazyFly()

moveFly()
    add fly speed to fly x
    if (fly x is past the right side of the canvas)
        move the fly back to the left
        give the fly a random y position

drawFly()
    Draw a black circle at the fly's position with its size

moveTongue()
    Set tongue x to frog x
    if (tongue direction is none)
        Do nothing
    else if (tongue direction is up)
        move the tongue up by its speed
         else if (tongue direction is down)
        move the tongue down by its speed
         else if (tongue direction is right)
        move the tongue right by its speed
         else if (tongue direction is left)
        move the tongue left by its speed
    else if (tongue state is reset)
        move the tongue down by its speed
        if (tongue hit the bottom)
            set the tongue state to none

drawTongue()
    Draw a purple circle at the tongue position with its size
    Draw a purple line from the tongue position to the frog position

drawFrog()
    
    Draw a blue circle at the frog position with its size
    Draw a bunch of tiny dark blue circle on the frog's body

checkTongueFlyOverlap()
    if (tongue circle overlaps the fly)
        Move the fly back to the left at a random y
        set the tongue state to reset
        add a crazy fly

keyPressed()
    if (keycode is up)
        set tongue state to up
        else if (keycode is right)
        set tongue state to right
        else if (keycode is left)
        set tongue state to left
        else if (keycode is down)
        set tongue state to down
```