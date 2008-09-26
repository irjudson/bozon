RelationsetEditor=function(id,_3e1f){
Workflow.call(this,id);
this.relationset=_3e1f;
var _3e20=this.relationset.getTableAliasModels();
for(var i=0;i<_3e20.getSize();i++){
var _3e22=new TableAliasFigure(_3e20.get(i));
this.addFigure(_3e22);
}
};
RelationsetEditor.prototype=new Workflow;
RelationsetEditor.prototype.type="RelationsetEditor";
