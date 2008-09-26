CommandMoveTable=function(model){
Command.call(this,"move model");
this.model=model;
this.oldX=model.getPosition().getX();
this.oldY=model.getPosition().getY();
};
CommandMoveTable.prototype=new Command;
CommandMoveTable.prototype.type="CommandMoveTable";
CommandMoveTable.prototype.setPosition=function(x,y){
this.newX=x;
this.newY=y;
};
CommandMoveTable.prototype.canExecute=function(){
return this.newX!=this.oldX||this.newY!=this.oldY;
};
CommandMoveTable.prototype.execute=function(){
this.redo();
};
CommandMoveTable.prototype.undo=function(){
this.model.setPosition(this.oldX,this.oldY);
};
CommandMoveTable.prototype.redo=function(){
this.model.setPosition(this.newX,this.newY);
};
