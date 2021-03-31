class BALLS{
    constructor(x,y,r){
var options={
    density:0.8,
    friction:0,
    restitution:1.0
    
}
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
this.x=x;
this.y=y
this.radius=r
    }
    display(color){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
ellipseMode(RADIUS);
fill(color);
ellipse(0,0,this.r,this.r);
pop();
    }
}