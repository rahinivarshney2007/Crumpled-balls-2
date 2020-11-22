class Dustbin{
    constructor (x,y,width,height){
        var options={
            isStatic:true,
            friction:0.3
        }
        this.image=loadImage("sprites/dust.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height 
        World.add(world,this.body)

    }
    fetch(){
    var pos=this.body.position
    fill("pink")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}
}