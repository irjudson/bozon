SVGTriangle=function(width,_35bd){
Figure.call(this);
if(width&&_35bd){
this.setDimension(width,_35bd);
}
};
SVGTriangle.prototype=new SVGFigure;
SVGTriangle.prototype.paint=function(){
this.context.clearRect(0,0,this.getWidth(),this.getHeight());
this.context.fillStyle="rgba(200,0,0,0.3)";
this.context.fillStyle="rgb(0,200,0)";
this.context.fillStyle="rgb(200,0,0)";
this.context.fillRect(10,10,55,50);
this.context.fillStyle="rgba(0, 0, 200, 0.5)";
this.context.fillRect(30,30,55,50);
this.context.beginPath();
this.context.moveTo(this.width/2,0);
this.context.lineTo(this.width,this.height);
this.context.lineTo(0,this.height);
this.context.closePath();
this.context.stroke();
};
