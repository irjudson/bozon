InputFieldFigure=function(){
InputPort.call(this);
};
InputFieldFigure.prototype=new InputPort;
InputFieldFigure.prototype.type="InputFieldFigure";
InputFieldFigure.prototype.createCommand=function(_3dee){
if(_3dee.getPolicy()==EditPolicy.CONNECT){
if(_3dee.source.parentNode.id==_3dee.target.parentNode.id){
return null;
}
if(_3dee.source instanceof OutputPort){
return new CommandConnect(_3dee.canvas,_3dee.source,_3dee.target);
}
}
return InputPort.prototype.createCommand.call(this,_3dee);
};
