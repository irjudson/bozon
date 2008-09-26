MyGraphicalEditorFactory=function(){
EditPartFactory.call(this);
};
MyGraphicalEditorFactory.prototype=new EditPartFactory;
MyGraphicalEditorFactory.prototype.type="MyGraphicalEditorFactory";
MyGraphicalEditorFactory.prototype.createEditPart=function(model){
var _4687;
if(model instanceof TableModel){
_4687=new TableFigure();
}
if(model instanceof ForeignKeyModel){
_4687=new ForeignKeyFigure();
}
if(_4687==null){
alert("factory called with unknown model class:"+model.type);
}
_4687.setModel(model);
return _4687;
};
