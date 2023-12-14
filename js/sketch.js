let t = 0; // creates variable t to track the time

function setup() {
  createCanvas(600, 600); // creates a canvas of  600x600 pixels
  background(255); // sets the background colour to white
  noFill(); // doesnt fill the shapes (ellipse) with colour
  stroke(0); // stroke colour set to black (0)
}

function draw() {
  let xoff = 0; // creates the variable xoff and sets its initial value to '0'
  for (let x = 0; x < width; x += 10) { // creates a for loop, sets the variable x to a value of 0 and tracks the canvas width. As long as the value of X is less than the width ofthe canvas then the loop will continue to run. It will increase in increments of '10'. += adds 10 to the counter and returns it to the variable.
    let yoff = 0; // same as xoff - both of these variables are used in conjunction to control the generation of perlin noise
    for (let y = 0; y < height; y += 10) { // does the same as line 12 but for the y-axis; creates a for loop which iterates across the height of the canvas
      let r = map(noise(xoff, yoff, t), 0, 1, 0, 50); // creates a variable 'r' (radius) and maps a noise value from a value of 0 to 50 
      
      // variable angle assigned to noise function and determines the direction of movement in the flow field. Noise value is multipied by two_pi (pi*2) - this line just dictates the direction of movement.
      let angle = noise(xoff, yoff, t) * TWO_PI;
      
      // These lines calculate the x/yOffset respectively based on the angle * r * 0.5. By adjusting the scaling multiplier at the end of the line it changes the speed of the flow field.
      let xOffset = cos(angle) * r * 0.3; // scaling multiplier can be changed to adjust the speed of the flow field
      let yOffset = sin(angle) * r * 0.3; // scaling multiplier can be changed to adjust the speed of the flow field
      
      // draws a shape (interchangeable) at each addition of x/yOffset to their respective coordinates (x/y)
      ellipse(x + xOffset, y + yOffset, 5, 5); // integer values can be adjusted to create a more interesting and less uniform style
      
      yoff += 0.1; // takes the yoff variable and adds an increment of 0.1 and creates the evolving pattern which is depicted on the canvas
    }
    xoff += 0.1; // does the same as yoff value above but changes xoff instead
  }
  t += 0.01; // adds increments of 0.01 to the variable 't' and evolve the progression of the pattern. This value can also be increased to adjust the speed of the flow field's evolution.
}
// creates the function for keyPressed to save image
function keyPressed(){
  // if keyCode 81 (Q) is pressed then save canvas as 'myCanvas.jpg'
  if(keyCode === 81){
  }
    saveCanvas('myCanvas.jpg');
}