class Slingshot{
    constructor( bodyA, pointB){
        var options ={
            bodyA : bodyA,
           pointB : pointB,
            length: 20,
            stiffness: 0.12
        }
       this.sling = Constraint.create(options)
       this.pointB = pointB
       World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
   }
   
   attach(body){
    this.sling.bodyA = body
}


    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            push();
            strokeWeight(10);
            stroke(48,22,8); 
            line(pointA.x-30, pointA.y, this.pointB.x - 10, this.pointB.y);  
            line(pointA.x-30, pointA.y, this.pointB.x + 30, this.pointB.y);  
            pop();
           
        }
    }
}