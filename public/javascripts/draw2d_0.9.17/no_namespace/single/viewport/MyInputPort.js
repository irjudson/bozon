MyInputPort=function(_399c){
InputPort.call(this,_399c);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _399e=new CommandConnect(this.parentNode.workflow,port,this);
_399e.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_399e);
}
};
