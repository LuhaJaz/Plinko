class Plinko {
    constructor(x,y) {
      var options = {
          isStatic : true
      }
      this.r = 10;
      this.body = Bodies.circle(x,y,10,options);
     
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y)
      rotate(angle)
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,10,10);
      pop()
    }
  };