class Ball{
    constructor(x,y){
    var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':0.5,
    }
this.image=loadImage("sprites/paper.png")
this.body=Bodies.circle(x,y,40,options)
World.add(world,this.body)


}

fetch(){
var pos=this.body.position

fill("green")
imageMode(RADIUS)
image(this.image,pos.x,pos.y,50,50)
//ellipse(pos.x,pos.y,20)

}
}

//display an image 
//image(location,x,y,width,height)