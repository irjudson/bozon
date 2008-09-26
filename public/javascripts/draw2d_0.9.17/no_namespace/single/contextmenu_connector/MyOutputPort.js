MyOutputPort=function(_3e23){
OutputPort.call(this,_3e23);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.type="MyOutputPort";
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3e25=new CommandConnect(this.parentNode.workflow,this,port);
_3e25.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_3e25);
}
};
