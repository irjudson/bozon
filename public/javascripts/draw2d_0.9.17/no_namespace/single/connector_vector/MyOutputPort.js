MyOutputPort=function(_42f4){
OutputPort.call(this,_42f4);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _42f6=new CommandConnect(this.parentNode.workflow,this,port);
_42f6.setConnection(new ArrowConnection());
this.parentNode.workflow.getCommandStack().execute(_42f6);
}
};
