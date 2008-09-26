Start=function(){
ImageFigure.call(this,this.type+".png");
this.outputPort=null;
this.setDimension(50,50);
};
Start.prototype=new ImageFigure;
Start.prototype.type="Start";
Start.prototype.setWorkflow=function(_4422){
ImageFigure.prototype.setWorkflow.call(this,_4422);
if(_4422!=null&&this.outputPort==null){
this.outputPort=new OutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_4422);
this.outputPort.setBackgroundColor(new Color(245,115,115));
this.addPort(this.outputPort,this.width,this.height/2);
}
};
