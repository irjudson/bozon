End=function(){
ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
};
End.prototype=new ImageFigure;
End.prototype.type="End";
End.prototype.setWorkflow=function(_35d9){
ImageFigure.prototype.setWorkflow.call(this,_35d9);
if(_35d9!=null&&this.inputPort==null){
this.inputPort=new MyInputPort();
this.inputPort.setName("input");
this.inputPort.setWorkflow(_35d9);
this.inputPort.setBackgroundColor(new Color(115,115,245));
this.addPort(this.inputPort,0,this.height/2);
}
};
