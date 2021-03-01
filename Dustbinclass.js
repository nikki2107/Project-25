class Dustbin{
    constructor(x,y,width,height){
      var options = {
        isStatic : true
        
    }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.image = loadImage("dustbingreen (1).png")
      this.x=x
      this.y=y
      this.width=width
      this.height=height
    World.add(world,this.body)
    }

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 170, 0, 150,  150);
      pop();
    }
}