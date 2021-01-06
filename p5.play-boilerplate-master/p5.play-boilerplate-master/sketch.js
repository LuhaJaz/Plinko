const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles = []
var plinkos = []
var divisons = []
var divisonHeight = 300

  function setup(){
    createCanvas(800,800)
    engine = Engine.create()
    world = engine.world
    Engine.run(engine)
    ground = new Ground (400,height,800,20)
    for (var k = 0; k <= width; k = k+80){
      divisons.push(new Divison(k,height - divisonHeight/2, 10, divisonHeight))
    }
for (var a = 0; a <= width; a = a+40){
plinkos.push(new Plinko(a,75))
}
for (var b = 0; b <= width; b = b+40){
  plinkos.push(new Plinko(b,175))
  }
  for (var c = 0; c <= width; c = c+40){
    plinkos.push(new Plinko(c,275))
    }
    for (var d = 0; d <= width; d = d+40){
      plinkos.push(new Plinko(d,375))
      }

      
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  drawSprites();
  ground.display();
  if(frameCount%80 ===0){
    particles.push(new Particle(random(width/2-30, width/2 +30), 10, 10))
  }
  for (var j = 0; j< divisons.length;j++){
    divisons [j].display();
  }
  
  for (var a = 0; a< plinkos.length;a++){
    plinkos [a].display();
  }
  for (var b = 0; b< plinkos.length;b++){
    plinkos[b].display();
  }
  for (var c = 0; c< plinkos.length;c++){
    plinkos [c].display();
  }
  for (var d = 0; d< plinkos.length;d++){
    plinkos [d].display();
  }
  for (var e = 0; e< particles.length;e++){
    particles [e].display();
  }

  
 
}