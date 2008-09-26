MyOutputPort=function(_3109){
OutputPort.call(this,_3109);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _310b=new CommandConnect(this.parentNode.workflow,this,port);
_310b.setConnection(new DoubleclickConnection());
this.parentNode.workflow.getCommandStack().execute(_310b);
}
};
