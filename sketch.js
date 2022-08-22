var bgImg;
var bg;
var monkey;
var monkeyImg;
var plataformaImg;
var plataformGroup;
var gameState = 1;
var bananaGroup;
var bananaImg;
var num;
var score = 0;
var banana;

function preload(){
    bgImg = loadImage("./assets/Fundo1.jpg");
    monkeyImg = loadAnimation("./assets/monkey1.png","./assets/monkey1.png","./assets/monkey2.png","./assets/monkey2.png");
    bananaImg = loadImage("./assets/banana.png")
    plataformaImg = loadImage("./assets/baseTerra-removebg-preview.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //bg = createSprite(300,490,2560,1440);
    //bg.addImage('bg',bgImg);
    //bg.x = bg.width/1;
    //bg.scale = 3;
    monkey = createSprite(width/7,height/2,200,200);
    monkey.addAnimation('monkey',monkeyImg);
    monkey.scale = 2;

    plataformGroup = createGroup();
    bananaGroup = createGroup();
    monkey.setCollider("circle",0,0,30);
    monkey.debug = true;
}

function draw(){
    background(bgImg);
    
    
    //bg.velocityX = -4;
    //if(bg.x<0){
       // bg.x = bg.width/1;
    //}
    if(gameState == 1){
        textSize(50);
        fill("white");
        text(`Pontuação: ${score} ` ,15,45);
        
        if(keyDown('space')){
            monkey.velocityY = -10;
        }
        if(monkey.isTouching(bananaGroup)){
            // score += 1;
            // banana.remove();
        }

        
        monkey.velocityY += 0.8;
        spawnPlataformas();
        spawnBananas();
    }
    
    monkey.collide(plataformGroup);
    drawSprites();
}

function spawnPlataformas(){
    if(frameCount%80==0){
        var plataform = createSprite(2000,500,300,75);
        plataform.addImage('plataform',plataformaImg);
        num = Math.round(random(350,700));
        plataform.y = num;
        plataform.velocityX = -7;
        plataformGroup.add(plataform);
    }

}

function spawnBananas(){
    if(frameCount%80==0){
        banana = createSprite(2000,500,300,75);
        banana.addImage('banana',bananaImg);
        banana.scale = 0.13;
        banana.y = num-75;
        banana.velocityX = -7;
        bananaGroup.add(banana);

    }
}