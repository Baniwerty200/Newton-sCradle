class ROPES{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX,y:offsetY},
            length:200


        }
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
var BA=this.rope.bodyA.position;
var BB=this.rope.bodyB.position;
var PBX=BB.x+this.offsetX;
var PBY=BB.y+this.offsetY;

stroke("black");
strokeWeight(2);
line(BA.x,BA.y,PBX,PBY);
    }
}