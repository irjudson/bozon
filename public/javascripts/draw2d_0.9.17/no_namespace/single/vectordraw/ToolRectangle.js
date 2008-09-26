ToolRectangle=function(_44d3){
ToolGeneric.call(this,_44d3);
};
ToolRectangle.prototype=new ToolGeneric;
ToolRectangle.prototype.type="ToolRectangle";
ToolRectangle.prototype.execute=function(x,y){
var _44d6=new Rectangle();
_44d6.setDimension(100,60);
_44d6.setBackgroundColor(new Color(255,255,255));
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_44d6,x,y));
ToolGeneric.prototype.execute.call(this,x,y);
};
