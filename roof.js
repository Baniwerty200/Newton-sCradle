class ROOFS{
    constructor(x,y,w,h){
var options={isStatic:true};
this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body);
this.x=x;
this.y=y;
this.width=w;
this.height=h;
    }
    display(color){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(color);
      
        rect(0,0,this.width,this.height);
        pop();
    }
}