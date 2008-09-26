Start=function(){
ImageFigure.call(this,this.type+".png");
this.outputPort=null;
this.setDimension(50,50);
};
Start.prototype=new ImageFigure;
Start.prototype.type="Start";
Start.prototype.setWorkflow=function(_30fe){
ImageFigure.prototype.setWorkflow.call(this,_30fe);
if(_30fe!=null&&this.outputPort==null){
this.outputPort=new OutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_30fe);
this.outputPort.setBackgroundColor(new Color(245,115,115));
this.outputPort.setName("output");
this.addPort(this.outputPort,this.width,this.height/2);
}
};
