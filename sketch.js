var biker, bikerImg;
var cash, diamonds, apple, cashImg, diamondsImg, appleImg;
var path, pathImg;
var gameOver, gameOverImg;
var obstacleGroup, appleGroup;
var speed = -4;

function preload(){
//load Animations/Images
	bikerImg = loadAnimation("mainPlayer1.png", "mainPlayer2.png", "mainPlayer3.png");
	pathImg = loadImage("Road.png");
	cashImg = loadImage("cash.png");
	diamondsImg = loadImage("diamonds.png");
	appleImg = loadImage("fruit2.png");
	gameOverImg = loadImage("gameOver.png");
}

function setup() {
 //Set up game
	createCanvas(400, 400);
	path = createSprite(200,200, 20,20);
	path.addImage(pathImg);	
	path.velocityX = speed;
	path.scale = 0.4;

	biker = createSprite(200,200,20,20);
	// biker.addAnimation(bikerImg);
	//  obstacleGroup = new Group();
	//  appleGroup = new Group();
}

function draw() { 
	//functions for the game to work
	background(0);
	biker.y = World.MouseY;
	if(path.x > 400){
		path.x = height/2;
	  }
	// if(appleGroup.isTouching(biker)){
	// 	speed +=2;
	// 	path.velocityX = speed;
	// }
	drawSprites();
}