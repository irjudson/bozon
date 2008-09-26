MyOutputPort=function(_35ce){
OutputPort.call(this,_35ce);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.type="MyOutputPort";
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _35d0=new CommandConnect(this.parentNode.workflow,this,port);
_35d0.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_35d0);
}
};
