ToolLine=function(_35d1){
ToolGeneric.call(this,_35d1);
};
ToolLine.prototype=new ToolGeneric;
ToolLine.prototype.type="ToolLine";
ToolLine.prototype.execute=function(x,y){
var _35d4=new Line();
_35d4.setStartPoint(x,y);
_35d4.setEndPoint(x+100,y+100);
this.palette.workflow.getCommandStack().execute(new CommandAdd(this.palette.workflow,_35d4));
ToolGeneric.prototype.execute.call(this,x,y);
};
