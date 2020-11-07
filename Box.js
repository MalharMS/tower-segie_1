class Box {

constructor (x,y,width,height) {

var options = {

    restitution:0.4,
    friction:0,
    //isStatic:true
    
}
this.x = x;
this.y = y;
this.height = height;
this.width = width;
this.block = Bodies.rectangle(x, y, width, height, options);
World.add(world, this.block);
}

display() {

var angle = this.block.angle;
var pos = this.block.position;

push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0, this.width, this.height)
pop();

}


}