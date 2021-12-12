
function setup() {
  createCanvas(400,400);
  background(50);
  var box = createSprite(200,200,30,30);
  box.shapeColour = "white";

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed

  
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
 
    if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("violet");
  }

  if (keyIsDown(UP_ARROW)) 
  {
    background("blue");
  }






  
  drawSprites();
}

