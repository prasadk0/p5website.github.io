var bubbles =[];
// var bubble = {
//   x:300,
//   y:200,
//   display:function(){
//     stroke(255);
//     noFill();
//      ellipse(this.x,this.y,24,24);
//   },
  
//    move:function(){
//   this.x=this.x+random(-1,1);
// this.y=this.y+random(-1,1);

// }
 
  

function Bubble(){
  this.x=random(0,width);
  this.y=random(0,height);
    this.display = function(){
    stroke(179, 184, 189);
   noFill();
      ellipse(this.x,this.y,24,24);
  };
  this.move=function(){
   this.x=this.x+random(1,-1); 
     this.y=this.y+random(1,-1); 
    
  }
}

function setup() {
    
  createCanvas(windowWidth,windowHeight);
   for(var i=0;i<700;i++){
    bubbles[i]=new Bubble();
  }
//   bubbles [0] = {
//      x:random(0,width),
//   y:random(0,height),
//   displa : function(){
//     stroke(255);
//     noFill();
//      ellipse(this.x,this.y,24,24);
//   },
  
//    mov : function(){
//   
//     }
//   }

  
}



function draw() {
    background(33, 37, 41);
    for(var i=0;i<bubbles.length;i++){
    bubbles[i].move();
       bubbles[i].display();
      
  }
  
}
function windowResized(){
  resizeCanvas(windowWidth-17,windowHeight-50);
}
