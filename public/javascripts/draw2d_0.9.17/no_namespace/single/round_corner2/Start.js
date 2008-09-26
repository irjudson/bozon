Start=function(){
ImageFigure.call(this,this.type+".png");
this.outputPort=null;
this.setDimension(50,50);
return this;
};
Start.prototype=new ImageFigure;
Start.prototype.type="Start";
Start.prototype.setWorkflow=function(_3df0){
ImageFigure.prototype.setWorkflow.call(this,_3df0);
if(_3df0!=null&&this.outputPort==null){
this.outputPort=new OutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_3df0);
this.outputPort.setBackgroundColor(new Color(245,115,115));
this.outputPort.setName("output");
this.addPort(this.outputPort,this.width,this.height/2);
}
};
