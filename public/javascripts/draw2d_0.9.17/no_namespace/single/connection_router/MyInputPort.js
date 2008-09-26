MyInputPort=function(_3c65){
InputPort.call(this,_3c65);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3c67=new CommandConnect(this.parentNode.workflow,port,this);
_3c67.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_3c67);
}
};
