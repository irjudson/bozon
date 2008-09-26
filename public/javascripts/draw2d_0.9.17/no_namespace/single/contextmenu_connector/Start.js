Start=function(){
ImageFigure.call(this,this.type+".png");
this.outputPort=null;
this.setDimension(50,50);
};
Start.prototype=new ImageFigure;
Start.prototype.type="Start";
Start.prototype.setWorkflow=function(_4019){
ImageFigure.prototype.setWorkflow.call(this,_4019);
if(_4019!=null&&this.outputPort==null){
this.outputPort=new MyOutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_4019);
this.outputPort.setBackgroundColor(new Color(245,115,115));
this.addPort(this.outputPort,this.width,this.height/2);
}
};
