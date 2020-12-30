class Chain{
constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        length: 200,
        stiffness: 1.2
    }
this.pointB=pointB;
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
display(){
var pointA=this.chain.bodyA.position;
var pointB=this.pointB
push()
strokeWeight(4)
stroke("green")
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
}

}