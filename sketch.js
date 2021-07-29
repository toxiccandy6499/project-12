var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}



function createApples(){

  apple = createSprite(random(50,350),40,10,10);
  function preload(){
    appleImg = loadImage ("apple.png");
  }
   scale = 0.2
   velocity.x = -3
}



var select_sprites = Math.round(random(1,2))
  if(frameCount % 80 == 0 ){
      if (select_sprites == 1){
        apple = createSprite(50,350.10,10)
      }
      else{
        leaf = createSprite(50,350,10,10)
      }
    }