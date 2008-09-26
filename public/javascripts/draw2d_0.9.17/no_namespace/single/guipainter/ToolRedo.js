ToolRedo=function(_35e8){
Button.call(this,_35e8);
};
ToolRedo.prototype=new Button;
ToolRedo.prototype.type="ToolRedo";
ToolRedo.prototype.execute=function(){
this.palette.workflow.getCommandStack().redo();
ToolGeneric.prototype.execute.call(this);
};
