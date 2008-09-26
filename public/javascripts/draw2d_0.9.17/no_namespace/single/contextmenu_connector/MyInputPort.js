MyInputPort=function(_34b7){
InputPort.call(this,_34b7);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _34b9=new CommandConnect(this.parentNode.workflow,port,this);
_34b9.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_34b9);
}
};
