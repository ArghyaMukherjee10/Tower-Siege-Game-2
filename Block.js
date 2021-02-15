class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity = 255;
  }
  display(){
   // console.log(this.body.speed)
      if (this.body.speed<7){
        super.display()
      }else{
        World.remove(world, this.body);
        push()
        this.visiblity = this.visiblity -1;
        pop()
      }
      }
      score (){
        if (this.visiblity<0 && this.visiblity>-1005){
          score ++ ;
        }
      }
}