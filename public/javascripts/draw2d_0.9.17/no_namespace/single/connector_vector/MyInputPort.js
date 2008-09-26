MyInputPort=function(_3e51){
InputPort.call(this,_3e51);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3e53=new CommandConnect(this.parentNode.workflow,port,this);
_3e53.setConnection(new ArrowConnection());
this.parentNode.workflow.getCommandStack().execute(_3e53);
}
};
