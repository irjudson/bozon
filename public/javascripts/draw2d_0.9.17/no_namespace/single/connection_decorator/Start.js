Start=function(){
ImageFigure.call(this,this.type+".png");
this.outputPort=null;
this.setDimension(50,50);
};
Start.prototype=new ImageFigure;
Start.prototype.type="Start";
Start.prototype.setWorkflow=function(_310e){
ImageFigure.prototype.setWorkflow.call(this,_310e);
if(_310e!=null&&this.outputPort==null){
this.outputPort=new MyOutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_310e);
this.outputPort.setName("output");
this.outputPort.setBackgroundColor(new Color(245,115,115));
this.addPort(this.outputPort,this.width,this.height/2);
}
};
