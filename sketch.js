var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("mario_theme.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.loop( );

    block1 = createSprite(105,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,180,30);
    block2.shapeColor = "purple";

    block3 = createSprite(485,580,180,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(675,580,180,30);
    block4.shapeColor = "red";
  

   
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "black";
    //write code to add velocityX and velocityY
    ball.velocityX = -3;
    ball.velocityY = -8;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    bounceOff();

    drawSprites();
}
function bounceOff(){
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "purple";
    }


    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop( );
    }
    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "red";
}
}
