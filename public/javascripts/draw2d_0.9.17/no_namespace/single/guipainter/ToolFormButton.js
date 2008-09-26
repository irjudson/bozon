ToolFormButton=function(_323c){
ToolGeneric.call(this,_323c);
};
ToolFormButton.prototype=new ToolGeneric;
ToolFormButton.prototype.type="ToolFormButton";
ToolFormButton.prototype.execute=function(x,y){
var _323f=new ButtonFigure();
_323f.setDimension(100,20);
var _3240=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_323f,x,y,_3240));
ToolGeneric.prototype.execute.call(this,x,y);
};
