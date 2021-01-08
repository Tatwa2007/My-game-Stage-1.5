const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "start";
var backGround, bedroom, kitchen;
var player;
var blender, pan, mitt, glass, spatula;
//var closedBook, laptop, openBook, remote;
var coin;
//var kitchenButton;
var score = 0 ;

function preload () {

    bedroomImg = loadImage ("images/bedroom.png");
    kitchenImg = loadImage ("images/kitchen.PNG");
    boyImg = loadImage ("images/boy.png");
    girlImg = loadImage ("images/girl.png");
    coinImg = loadImage ("images/coin.gif");

    blenderImg = loadImage ("images/blender.gif");
    panImg = loadImage ("images/pan1.gif");
    mittImg = loadImage ("images/mitt.gif");
    glassImg = loadImage ("images/glass.gif");
    spatulaImg = loadImage ("images/spatula.gif");

    closedBookImg = loadImage ("images/closedBook.gif");
    openBookImg = loadImage ("images/openBook.gif");
    laptopImg = loadImage ("images/laptop.gif");
    remoteImg = loadImage ("images/remote.gif");

    
}

function setup(){
   

    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height,width,20);
    
   // ball1 = new ball (width/2, height-20, 100, PI/2)

   player = createSprite (width/2,height/2+20,20,20);
   player.debug = true;
}



function draw(){
   
    background (0)

    ScoreButton = createButton ("Score: " + score);
    ScoreButton.position(width-width/4,300);
    ScoreButton.style("font-size", "150px")

    //player.addImage (playerImg);
    player.scale = width/750;

    Engine.update(engine);
    ground.display(); 
   // ball1.display ();

   //player.y = mouseY
   //player.x = mouseX
   if (keyDown(RIGHT_ARROW)) {
       player.x = player.x+10
   }

   if (keyDown(LEFT_ARROW)) {
    player.x = player.x-10
}

if (keyDown(UP_ARROW) && player.y>height/2) {
    player.y = player.y-10
}

if (keyDown(DOWN_ARROW)) {
    player.y = player.y+10
}

if (gameState === "start") {
    fill ("white");
    rect (width/2, height/5, width-width/3,height/6)
   
    fill ("black");
    textSize (width/30)
    text ("Press 1 for Boy. Press 2 for Girl", width/4, height/5)

    image (boyImg, width/4-100, height/2, width/10, height/4)
    image (girlImg, width/2+600, height/2, width/10, height/4)
    
    player.visible = false;
   if (keyDown ("1")) {
       player.addImage (boyImg);
   }

   if (keyDown ("2")) {
    player.addImage (girlImg);
}

}

if (keyDown("1")|| keyDown("2")) {
    gameState = "bedroom"
    player.visible = true;
}

if (gameState !== "start") {
      player.y>height-100  
}
if (gameState === "bedroom") {
    background(bedroomImg)


    closedBook= createSprite (width-500, height/2+500,20,20);
    closedBook.addImage (closedBookImg);
    closedBook.scale = 2
     laptop = createSprite (width/2-500, height/2+100,20,20);
     laptop.addImage (laptopImg)
     laptop.scale = 2
      openBook= createSprite (width/5, height/2,20,20)
      openBook.addImage (openBookImg)
      openBook.scale = 2
       remote= createSprite (width/3, height-200,20,20)
       remote.addImage (remoteImg)
       remote.scale = 2

       if (player.isTouching(closedBook) && mousePressedOver(closedBook)) {
        score = score+1;
        closedBook.destroy();
         }
     if (player.isTouching(laptop) && mousePressedOver(laptop)) {
    score = score+1;
    laptop.destroy();
     }
     if (player.isTouching(openBook) && mousePressedOver(openBook)) {
        score = score+1;
        openBook.destroy();
         }
         if (player.isTouching(remote) && mousePressedOver(remote)) {
            score = score+1;
            remote.destroy();
             }

       kitchenButton = createButton ("Go to Kitchen");
    kitchenButton.position (width-width/5, height-400);
    kitchenButton.style ("width", "500px");
    kitchenButton.style ("height", "300px");
    kitchenButton.style ("font-size", "100px");

    kitchenButton.mousePressed (()=>{
        gameState = "kitchen"
    })

}

/*if (mousePressedOver (kitchenButton)) {
    gameState = "kitchen"
}*/


if (gameState === "kitchen") {
    background(kitchenImg);

blender = createSprite (width/2, height/2,20,20)
blender.addImage (blenderImg)
blender.scale = 2
//blender.scale = 5
pan = createSprite (width/2, height/2+100,20,20)
pan.addImage (panImg)
pan.scale =2
mitt = createSprite (width/2+200, height/2+200,20,20)
mitt.addImage (mittImg)
mitt.scale = 2
glass = createSprite (width/2, height/2,20,20)
glass.addImage (glassImg)
glass.scale = 2
spatula = createSprite (width/2, height/2,20,20)
spatula.addImage (spatulaImg);
spatula.scale = 2
if (player.isTouching(blender) && mousePressedOver(blender)) {
    score = score+1;
    blender.destroy();
     }
     if (player.isTouching(pan) && mousePressedOver(pan)) {
        score = score+1;
        pan.destroy();
         }

         if (player.isTouching(mitt) && mousePressedOver(mitt)) {
            score = score+1;
            mitt.destroy();
             }
             if (player.isTouching(glass) && mousePressedOver(glass)) {
                score = score+1;
                glass.destroy();
                 }

 if (player.isTouching(spatula) && mousePressedOver(spatula)) {
                    score = score+1;
                    spatula.destroy();
                     }

bedroomButton = createButton ("Go to Bedroom");
bedroomButton.position (width/5, height-400);
bedroomButton.style ("width", "500px");
bedroomButton.style ("height", "300px");
bedroomButton.style ("font-size", "100px");

bedroomButton.mousePressed (()=>{
    gameState = "bedroom"
})

}


drawSprites ();

}

/*function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}*/

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launch";  
}

function keyPressed(){
    if(keyCode===32 && bird.body.speed<1){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x:200, y:50})
    bird.body.speed = 0;
    slingshot.attach(bird.body);
    }
}

async function getTime(){
    console.log(T);
    }

   async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var T = dateTime.slice(11,13);

    

    backgroundImg = loadImage(bg);

   }
   */
   
