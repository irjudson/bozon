ToolRectangleUnfilled=function(_35e9){
ToolGeneric.call(this,_35e9);
};
ToolRectangleUnfilled.prototype=new ToolGeneric;
ToolRectangleUnfilled.prototype.type="ToolRectangleUnfilled";
ToolRectangleUnfilled.prototype.execute=function(x,y){
var _35ec=new Rectangle();
_35ec.setDimension(100,60);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_35ec,x,y));
ToolGeneric.prototype.execute.call(this,x,y);
};
