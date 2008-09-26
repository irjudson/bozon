End=function(){
ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
};
End.prototype=new ImageFigure;
End.prototype.type="End";
End.prototype.setWorkflow=function(_30fa){
ImageFigure.prototype.setWorkflow.call(this,_30fa);
if(_30fa!=null&&this.inputPort==null){
this.inputPort=new MyInputPort();
this.inputPort.setName("input");
this.inputPort.setWorkflow(_30fa);
this.inputPort.setBackgroundColor(new Color(115,115,245));
this.addPort(this.inputPort,0,this.height/2);
}
};
