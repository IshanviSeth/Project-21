 //Global Variables 
 var thickness, wall;

 var speed, weight, bullet;

function setup() {
  //Setting the height and width of the canvas 
  createCanvas(1600,400);
  //Creating the wall 
  bullet =  createSprite(50, 200, 50, 50);
  //Random speed 
  speed = random(223,321);
  // Bullet's velocityX
  bullet.velocityX = speed;

 //Creating the bullet 
  wall = createSprite(1500, 200, thickness, height/2);

  //Random thickness 
  thickness = random(22, 83);

  //Random weight 
  weight = random(30, 52);
}

function draw() {
  //Setting the background color 
  background(0); 
    //HAS COLLIDED algorithm 
    if(hasCollided(bullet, wall)){
      //VelocityX of the bullet 
      bullet.velocityX = 0;
      //Formula of the damage 
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      //Condition of the color of the wall on the basis of the damage 
      if(damage > 10){
        //Setting the color of the wall 
        wall.shapeColor = color(255, 0, 0);
      }
      //Condition of the color of the wall on the basis of the damage 
      if(damage < 10){
        //Setting the color of the wall 
        wall.shapeColor = color(0, 255, 0)
      }
    }
    //Drawing the sprites 
    drawSprites();
  }
  //Algorithm for HAS COLLIDED 
  function hasCollided (Lbullet, Lwall){
  //Condition that the bullet's right edge is equal to bullet's x position and bullet's width   
  bulletRightEdge =  Lbullet.x + Lbullet.width;
  //Conditon that the wall's left edge is equal to wall's x position 
  wallLeftEdge = Lwall.x;
  //Condition that if the bullet's right edge is greater than or equal to the wall's left edge, then the following things should happen 
  if(bulletRightEdge >= wallLeftEdge){
    //Then it should not happen 
    return true;
  }
  //Or else it should happen 
  return false;
}
