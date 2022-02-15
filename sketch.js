var rocket, rocketImg;
var stars, starsGroup, starsImg;
var asteroid, asteroidImg, asteroidGroup;
var backgroundImg, bg;
var gameState = "play"

function preload() {
  rocketImg = loadImage("pictures/playerShip2_blue.png");
  starsImg = loadImage("pictures/star_gold.png");
  backgroundImg = loadImage("pictures/purple.png");
}
function setup(){
  createCanvas(600,600);

  bg = createSprite(300,300)
  bg.addImage(backgroundImg)
  bg.scale = 3;

  rocket = createSprite(200,250);
  rocket.addImage(rocketImg);
  rocket.velocityY = -1;

  

  starsGroup = new Group();
  asteroidGroup = new Group();


}

function draw(){
background(0)

drawSprites()

}