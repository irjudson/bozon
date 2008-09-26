OutputFieldFigure=function(){
OutputPort.call(this);
};
OutputFieldFigure.prototype=new OutputPort;
OutputFieldFigure.prototype.createCommand=function(_35e2){
if(_35e2.getPolicy()==EditPolicy.CONNECT){
if(_35e2.source.parentNode.id==_35e2.target.parentNode.id){
return null;
}
if(_35e2.source instanceof InputPort){
return new CommandConnect(_35e2.canvas,_35e2.target,_35e2.source);
}
return null;
}
return Port.prototype.createCommand.call(this,_35e2);
};
