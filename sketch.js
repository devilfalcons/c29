var particles=[];
var plinko=[];
var div=[];


function setup() {
  createCanvas(800,800);
  engine=Matter.Engine.create();
  world=engine.world
 ground=new Ground(400,800,800,20);
 for (let index = 0; index <=width; index+=80) {
  div.push(new Divisions(index,height-150,10,300))
   
 }
 for (let index = 75; index <= width; index+=50) {
   plinko.push(new Plinko(index,75))
   
 }
}

function draw() {
  background("black"); 
  Matter.Engine.update(engine);
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }
  for (let index = 0; index < div.length; index++) {
   div[index].display();
    
  }
  for (let index = 0; index < plinko.length; index++) {
    plinko[index].display();
     
   }
   for (let index = 0; index < particles.length; index++) {
    particles[index].display();
     
   }
  
}