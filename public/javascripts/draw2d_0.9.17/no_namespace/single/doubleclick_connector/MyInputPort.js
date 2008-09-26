MyInputPort=function(_3239){
InputPort.call(this,_3239);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _323b=new CommandConnect(this.parentNode.workflow,port,this);
_323b.setConnection(new DoubleclickConnection());
this.parentNode.workflow.getCommandStack().execute(_323b);
}
};
