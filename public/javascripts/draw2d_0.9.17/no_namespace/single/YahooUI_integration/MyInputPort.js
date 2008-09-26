MyInputPort=function(_42c3){
InputPort.call(this,_42c3);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _42c5=new CommandConnect(this.parentNode.workflow,port,this);
_42c5.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_42c5);
}
};
