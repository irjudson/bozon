MyOutputPort=function(_462d){
OutputPort.call(this,_462d);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.type="MyOutputPort";
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _462f=new CommandConnect(this.parentNode.workflow,this,port);
_462f.setConnection(new DecoratedConnection());
this.parentNode.workflow.getCommandStack().execute(_462f);
}
};
