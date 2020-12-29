class bob {

    constructor (x,y,r)
    
    {
    
    var options = {
    
  
    restitution:0.2,
    friction:2,
     density:1.2
    
    }
     this.x= x;
    
    this.y =y;
    
    this.r =r
    
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)

  
    } 
    display()
    
    {

    var bobpos=this.body.position;
    
    push()
    translate(bobpos.x, bobpos.y);
     ellipseMode(CENTER)
    strokeWeight(3);
    fill("pink")
        ellipse(0,0,60)
    
    pop()
    }
}