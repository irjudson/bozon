End=function(){
ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
return this;
};
End.prototype=new ImageFigure;
End.prototype.type="End";
End.prototype.setWorkflow=function(_3250){
ImageFigure.prototype.setWorkflow.call(this,_3250);
if(_3250!=null&&this.inputPort==null){
this.inputPort=new MyInputPort();
this.inputPort.setWorkflow(_3250);
this.inputPort.setBackgroundColor(new Color(115,115,245));
this.inputPort.setColor(null);
this.addPort(this.inputPort,0,this.height/2);
this.inputPort2=new MyInputPort();
this.inputPort2.setWorkflow(_3250);
this.inputPort2.setBackgroundColor(new Color(115,115,245));
this.inputPort2.setColor(null);
this.addPort(this.inputPort2,this.width/2,0);
this.inputPort3=new MyInputPort();
this.inputPort3.setWorkflow(_3250);
this.inputPort3.setBackgroundColor(new Color(115,115,245));
this.inputPort3.setColor(null);
this.addPort(this.inputPort3,this.width,this.height/2);
this.inputPort4=new MyInputPort();
this.inputPort4.setWorkflow(_3250);
this.inputPort4.setBackgroundColor(new Color(115,115,245));
this.inputPort4.setColor(null);
this.addPort(this.inputPort4,this.width/2,this.height);
}
};
