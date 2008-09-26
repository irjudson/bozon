ToolGroup=function(_466b){
ToolGeneric.call(this,_466b);
this.setTooltip("Form Group");
};
ToolGroup.prototype=new ToolGeneric;
ToolGroup.prototype.type="ToolGroup";
ToolGroup.prototype.execute=function(x,y){
var _466e=new GroupFigure();
_466e.setDimension(100,60);
this.palette.workflow.addFigure(_466e,x,y);
ToolGeneric.prototype.execute.call(this,x,y);
};
