ToolClear=function(_30fb){
Button.call(this,_30fb);
};
ToolClear.prototype=new Button;
ToolClear.prototype.type="ToolClear";
ToolClear.prototype.execute=function(){
this.palette.workflow.clear();
ToolGeneric.prototype.execute.call(this);
};
