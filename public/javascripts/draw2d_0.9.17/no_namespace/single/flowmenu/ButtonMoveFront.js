ButtonMoveFront=function(_4296){
Button.call(this,_4296,16,16);
};
ButtonMoveFront.prototype=new Button;
ButtonMoveFront.prototype.type="ButtonMoveFront";
ButtonMoveFront.prototype.execute=function(){
this.palette.workflow.moveFront(this.palette.workflow.getCurrentSelection());
ToolGeneric.prototype.execute.call(this);
};
