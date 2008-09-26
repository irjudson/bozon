MyInputPort=function(_44a7){
InputPort.call(this,_44a7);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _44a9=new CommandConnect(this.parentNode.workflow,port,this);
_44a9.setConnection(new DecoratedConnection());
this.parentNode.workflow.getCommandStack().execute(_44a9);
}
};
