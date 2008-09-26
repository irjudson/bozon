ToolCircleUnfilled=function(_3103){
ToolGeneric.call(this,_3103);
};
ToolCircleUnfilled.prototype=new ToolGeneric;
ToolCircleUnfilled.prototype.type="ToolCircleUnfilled";
ToolCircleUnfilled.prototype.execute=function(x,y){
var _3106=new Circle();
_3106.setDimension(100,100);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_3106,x,y));
ToolGeneric.prototype.execute.call(this,x,y);
};
