class slingshot{
    constructor(bodyA,pointB){

    
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:4,
        stiffness:0.04
    }
    this.pointB = pointB;

    this.slingshot = Constraint.create(options);
    World.add(world,this.slingshot);

}
fly(){
    this.slingshot.bodyA = null;
}

    

display()
{
    if(this.slingshot.bodyA){

    
    var PointA = this.slingshot.bodyA.position;
    var PointB = this.pointB;
    strokeWeight (3);
    line(PointA.x,PointA.y,PointB.x,PointB.y);
    
}}}