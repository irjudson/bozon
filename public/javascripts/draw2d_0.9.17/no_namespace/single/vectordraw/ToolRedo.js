ToolRedo=function(_310c){
Button.call(this,_310c);
};
ToolRedo.prototype=new Button;
ToolRedo.prototype.type="ToolRedo";
ToolRedo.prototype.execute=function(){
this.palette.workflow.getCommandStack().redo();
ToolGeneric.prototype.execute.call(this);
};
