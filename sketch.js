var gameState = 0;
var backgroundImg, paperImg;
var backgroundImg1;

function preload(){
   backgroundImg = loadImage("images/background.jpg");
   paperImg = loadImage("images/paper.png");

   backgroundImg1 = loadImage("images/background1.jpg");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(backgroundImg);

  image(paperImg, 300, 200, 850,300);
  textSize(25)
  fill("black")
  text(" hey! welcome to my game! \n if you want to know the story of my game, press the up arrow key, \n if you want to directly play the game, press the space key!",
  350, windowHeight/2);

  if(keyCode === 38){
    gameState = 1.1;
    background(backgroundImg1);
    textSize(25)
    fill("white")
    text(" Not long ago, demons had invaded my \n village, becasue of that, many people \n felt the urge to buy all the resources like \n food and water and lock themselves \n indoors, in the daytime there's always \n a huge crowd of people buying food \n which makes it hard for me to buy \n resources for my family. So I always \n go out at night to buy my family food, \n but at night is when the demons are \n out... \n Help me reach home safely with all the \n resources for my family! Press 'space'  \n to play the game!",
    470, 145);  
  }

  //if(keyCode === 32)){
    //gameState = 1.2;
    //background(backgroundImg1);
  //}

  

  drawSprites();
}


