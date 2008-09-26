MyInputPort=function(_3674){
InputPort.call(this,_3674);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3676=new CommandConnect(this.parentNode.workflow,port,this);
_3676.setConnection(new DecoratedConnection());
this.parentNode.workflow.getCommandStack().execute(_3676);
}
};
