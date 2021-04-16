class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.image1 = loadImage("batman.png")
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if(frameCount >= 200){
            image(this.image1,pos.x,pos.y+70,200,300);
        }
        else{
            image(this.image,pos.x,pos.y+70,300,300);
        }
        
        
    }
}
