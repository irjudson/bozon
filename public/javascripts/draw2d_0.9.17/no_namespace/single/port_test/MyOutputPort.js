MyOutputPort=function(_3079){
OutputPort.call(this,_3079);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _307b=new CommandConnect(this.parentNode.workflow,this,port);
_307b.setConnection(new DecoratedConnection());
this.parentNode.workflow.getCommandStack().execute(_307b);
}
};
