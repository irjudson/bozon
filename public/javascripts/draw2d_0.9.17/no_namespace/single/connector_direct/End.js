End=function(){
ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
};
End.prototype=new ImageFigure;
End.prototype.type="End";
End.prototype.setWorkflow=function(_42ce){
ImageFigure.prototype.setWorkflow.call(this,_42ce);
if(_42ce!=null&&this.inputPort==null){
this.inputPort=new InputPort();
this.inputPort.setWorkflow(_42ce);
this.inputPort.setBackgroundColor(new Color(115,115,245));
this.addPort(this.inputPort,0,this.height/2);
}
};
