class Side {
    constructor(x,y,width,height,options){
        var options={
        'restitution':0.5,
        'friction':1.0,
        'density':1.5,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    }
}  