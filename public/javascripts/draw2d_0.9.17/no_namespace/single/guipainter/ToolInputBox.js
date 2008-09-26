ToolInputBox=function(_3e4c){
ToolGeneric.call(this,_3e4c);
};
ToolInputBox.prototype=new ToolGeneric;
ToolInputBox.prototype.type="ToolInputBox";
ToolInputBox.prototype.execute=function(x,y){
var _3e4f=new InputBoxFigure();
_3e4f.setDimension(100,20);
var _3e50=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_3e4f,x,y,_3e50));
ToolGeneric.prototype.execute.call(this,x,y);
};
