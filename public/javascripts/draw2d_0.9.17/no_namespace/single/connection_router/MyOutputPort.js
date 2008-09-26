MyOutputPort=function(_3ebb){
OutputPort.call(this,_3ebb);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.type="MyOutputPort";
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3ebd=new CommandConnect(this.parentNode.workflow,this,port);
_3ebd.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_3ebd);
}
};
