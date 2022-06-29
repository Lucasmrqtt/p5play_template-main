var square 








function setup() {
  createCanvas(1299,619);
  background(30);
 square = createSprite (200,200, 30,30)
 square.shapeColor = "white"

 setInterval(() => {
  background (rgb (random (0,254) ,random (0,254) ,random (0,254)))
}, 5000);


}



function draw() 
{
  if (keyDown('space')) {
   
  }
  

  

  if (keyDown("up")||keyDown("w")) {
    square.position.y -=5
  }
  if (keyDown("down")||keyDown("s")) {
    square.position.y +=5
  }
  if (keyDown("left")||keyDown("a")) {
    square.position.x -=5
  } 
  if (keyDown("right")||keyDown("d")) {
    square.position.x +=5
  }




  drawSprites();
}


