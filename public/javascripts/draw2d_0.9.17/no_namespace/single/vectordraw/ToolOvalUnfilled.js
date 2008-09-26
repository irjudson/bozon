ToolOvalUnfilled=function(_35d5){
ToolGeneric.call(this,_35d5);
};
ToolOvalUnfilled.prototype=new ToolGeneric;
ToolOvalUnfilled.prototype.type="ToolOvalUnfilled";
ToolOvalUnfilled.prototype.execute=function(x,y){
var _35d8=new Oval();
_35d8.setDimension(100,60);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_35d8,x,y));
ToolGeneric.prototype.execute.call(this,x,y);
};
