ToolUndo=function(_3def){
Button.call(this,_3def);
};
ToolUndo.prototype=new Button;
ToolUndo.prototype.type="ToolUndo";
ToolUndo.prototype.execute=function(){
this.palette.workflow.getCommandStack().undo();
ToolGeneric.prototype.execute.call(this);
};
