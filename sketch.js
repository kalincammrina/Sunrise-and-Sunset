const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

 var engine, world;
 var backgroundImg;
 var bg ;

 function preload() {
  getBackgroundImg();
 }
 function setup(){
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
 }
 function draw(){   
  if(backgroundImg)
   background(backgroundImg);
  Engine.update(engine);
 }

 async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
console.log(hour);
  if(hour === 06){
    bg = "sunrise1.png";
  } else if(hour == 07){
    bg = "sunrise2.png";
  } else if(hour>=08 && hour<=09){
    bg = "sunrise3.png";
  } else if(hour>=10 && hour<=11){
    bg = "sunrise4.png";
  }  else if(hour == 12){
    bg = "sunrise5.png";
  } else if(hour == 13){
    bg = "sunrise6.png";
  } else if(hour == 14){
    bg = "sunset7.png";
  } else if(hour == 15){
    bg = "sunset8.png";
  } else if(hour == 16){
    bg = "sunset9.png";
  } else if(hour == 17){
    bg = "sunset10.png";
  } else if(hour == 18){
    bg = "sunset11.png";
  } else {
    bg = "sunset12.png";
  }
  console.log(bg);
    backgroundImg = loadImage(bg);
}