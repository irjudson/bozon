ToolGroup=function(_3e34){
ToolGeneric.call(this,_3e34);
this.setTooltip("Form Group");
};
ToolGroup.prototype=new ToolGeneric;
ToolGroup.prototype.type="ToolGroup";
ToolGroup.prototype.execute=function(x,y){
var _3e37=new GroupFigure();
_3e37.setDimension(100,60);
var _3e38=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_3e37,x,y,_3e38));
ToolGeneric.prototype.execute.call(this,x,y);
};
