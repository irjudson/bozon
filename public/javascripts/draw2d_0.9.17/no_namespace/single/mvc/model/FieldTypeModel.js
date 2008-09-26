FieldTypeModel=function(name){
AbstractObjectModel.call(this);
this.name=name;
this.parent=null;
};
FieldTypeModel.prototype=new AbstractObjectModel;
FieldTypeModel.prototype.type="FieldTypeModel";
FieldTypeModel.prototype.getName=function(){
return this.name;
};
FieldTypeModel.prototype.getDatabaseModel=function(){
return this.getModelParent().getDatabaseModel();
};
FieldTypeModel.prototype.getPersistentAttributes=function(){
var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);
att.name=this.name;
return att;
};
