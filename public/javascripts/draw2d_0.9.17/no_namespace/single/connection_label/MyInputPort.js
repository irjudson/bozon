MyInputPort=function(_3eb8){
InputPort.call(this,_3eb8);
};
MyInputPort.prototype=new InputPort;
MyInputPort.prototype.type="MyInputPort";
MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _3eba=new CommandConnect(this.parentNode.workflow,port,this);
_3eba.setConnection(new DoubleclickConnection());
this.parentNode.workflow.getCommandStack().execute(_3eba);
}
};
