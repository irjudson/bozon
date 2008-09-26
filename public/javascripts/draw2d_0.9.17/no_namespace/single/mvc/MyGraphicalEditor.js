MyGraphicalEditor=function(id,model){
this.model=model;
GraphicalEditor.call(this,id);
};
MyGraphicalEditor.prototype=new GraphicalEditor;
MyGraphicalEditor.prototype.type="MyGraphicalEditor";
MyGraphicalEditor.prototype.initializeGraphicalViewer=function(){
this.getGraphicalViewer().setModel(this.model);
this.getGraphicalViewer().setEditPartFactory(new MyGraphicalEditorFactory());
};
