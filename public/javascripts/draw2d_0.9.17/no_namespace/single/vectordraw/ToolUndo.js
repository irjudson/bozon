ToolUndo=function(_42f7){
Button.call(this,_42f7);
};
ToolUndo.prototype=new Button;
ToolUndo.prototype.type="ToolUndo";
ToolUndo.prototype.execute=function(){
this.palette.workflow.getCommandStack().undo();
ToolGeneric.prototype.execute.call(this);
};
