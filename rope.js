class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: height/2
        }
       /* this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.rope1 = loadImage('sprites/sling3.png');*/
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

   
    display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push ();
            //fill("grey");
            stroke("gray");
            strokeWeight (3);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
             pop ();
            
        }
    
}