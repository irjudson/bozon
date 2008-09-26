MyOutputPort=function(_3110){
OutputPort.call(this,_3110);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3112=new CommandConnect(this.parentNode.workflow,this,port);
_3112.setConnection(new DoubleclickConnection());
this.parentNode.workflow.getCommandStack().execute(_3112);
}
};
