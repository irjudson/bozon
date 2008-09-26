ToolCheckBox=function(_3911){
ToolGeneric.call(this,_3911);
};
ToolCheckBox.prototype=new ToolGeneric;
ToolCheckBox.prototype.type="ToolCheckBox";
ToolCheckBox.prototype.execute=function(x,y){
var _3914=new CheckBoxFigure();
_3914.setDimension(100,20);
var _3915=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_3914,x,y,_3915));
ToolGeneric.prototype.execute.call(this,x,y);
};
