ToolSave=function(_44f8){
ToolGeneric.call(this,_44f8);
};
ToolSave.prototype=new Button;
ToolSave.prototype.type="ToolSave";
ToolSave.prototype.execute=function(x,y){
alert(new XMLSerializer_01().toXML(this.palette.workflow.getDocument()));
};
