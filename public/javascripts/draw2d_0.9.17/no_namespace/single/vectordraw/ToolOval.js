ToolOval=function(_35e4){
ToolGeneric.call(this,_35e4);
};
ToolOval.prototype=new ToolGeneric;
ToolOval.prototype.type="ToolOval";
ToolOval.prototype.execute=function(x,y){
var _35e7=new Oval();
_35e7.setDimension(100,60);
_35e7.setBackgroundColor(new Color(255,255,255));
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_35e7,x,y));
ToolGeneric.prototype.execute.call(this,x,y);
};
