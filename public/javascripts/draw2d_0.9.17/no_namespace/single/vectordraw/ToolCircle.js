ToolCircle=function(_46de){
ToolGeneric.call(this,_46de);
};
ToolCircle.prototype=new ToolGeneric;
ToolCircle.prototype.type="ToolCircle";
ToolCircle.prototype.execute=function(x,y){
var _46e1=new Circle();
_46e1.setDimension(100,100);
_46e1.setBackgroundColor(new Color(255,255,255));
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_46e1,x,y));
ToolGeneric.prototype.execute.call(this,x,y);
};
