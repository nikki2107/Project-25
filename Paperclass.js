class Paper{constructor(x,y,radius) 
{var options = {
    isStatic : false,
    restitution : 1,
    friction : 0.9,
    density : 1.2
}


this.body = Bodies.circle(x,y,radius,options)
this.image = loadImage("paper.png")
this.x=x
this.y=y
this.radius=radius
World.add(world,this.body)


}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 170, 0, 50,  50);
    pop();
  }
}