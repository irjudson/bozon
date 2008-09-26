End=function(){
ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
};
End.prototype=new ImageFigure;
End.prototype.type="End";
End.prototype.setWorkflow=function(_36b0){
ImageFigure.prototype.setWorkflow.call(this,_36b0);
if(_36b0!=null&&this.inputPort==null){
this.inputPort=new InputPort();
this.inputPort.setWorkflow(_36b0);
this.inputPort.setBackgroundColor(new Color(115,115,245));
this.inputPort.setColor(null);
this.addPort(this.inputPort,0,this.height/2);
}
};
