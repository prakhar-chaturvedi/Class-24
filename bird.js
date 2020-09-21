class Bird{
    constructor(x,y){
    var options= {
     'restitution':0.5,
     'friction':0.4,
     'density':1
    }
    
    this.body= Bodies.rectangle(x,y,50,50,options);
    this.height=50;
    this.width=50;

    World.add(world,this.body);

    }

    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill(255,90,60);
     rectMode(CENTER);
     rect(0,0,50,50);
     pop();

    }







}