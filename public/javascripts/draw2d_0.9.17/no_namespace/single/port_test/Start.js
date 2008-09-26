Start=function(){
ImageFigure.call(this,this.type+".png");
this.outputPort=null;
this.setDimension(50,50);
};
Start.prototype=new ImageFigure;
Start.prototype.type="Start";
Start.prototype.setWorkflow=function(_3e65){
ImageFigure.prototype.setWorkflow.call(this,_3e65);
if(_3e65!=null&&this.outputPort==null){
this.outputPort=new MyOutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_3e65);
this.outputPort.setHideIfConnected(true);
this.outputPort.setName("output");
this.outputPort.setBackgroundColor(new Color(245,115,115));
this.addPort(this.outputPort,this.width,this.height/2);
}
};
