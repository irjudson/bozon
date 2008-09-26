MyOutputPort=function(_36d5){
OutputPort.call(this,_36d5);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.type="MyOutputPort";
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _36d7=new CommandConnect(this.parentNode.workflow,this,port);
_36d7.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_36d7);
}
};
