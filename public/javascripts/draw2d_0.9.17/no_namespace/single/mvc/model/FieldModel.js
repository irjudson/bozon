FieldModel=function(name){
AbstractObjectModel.call(this);
this.name=name;
this.typeModel=new FieldTypeModelBoolean(false);
};
FieldModel.prototype=new AbstractObjectModel;
FieldModel.prototype.type="FieldModel";
FieldModel.DBTYPE_TEXT="TEXT";
FieldModel.DBTYPE_DOCUMENT="DOCUMENT";
FieldModel.DBTYPE_INTEGER="INTEGER";
FieldModel.DBTYPE_LONG="LONG";
FieldModel.DBTYPE_FLOAT="FLOAT";
FieldModel.DBTYPE_DOUBLE="DOUBLE";
FieldModel.DBTYPE_DECIMAL="DECIMAL";
FieldModel.DBTYPE_DATE="DATE";
FieldModel.DBTYPE_TIME="TIME";
FieldModel.DBTYPE_TIMESTAMP="TIMESTAMP";
FieldModel.DBTYPE_LONGTEXT="LONGTEXT";
FieldModel.DBTYPE_BINARY="BINARY";
FieldModel.DBTYPE_ENUM="ENUM";
FieldModel.DBTYPE_BOOLEAN="BOOLEAN";
FieldModel.prototype.getName=function(){
return this.name;
};
FieldModel.prototype.getExtendedDescriptionLabel=function(){
if(this.getTypeName()==FieldModel.DBTYPE_TEXT){
return this.getName()+" "+this.getTypeName()+"<"+this.getLengthAsString()+">";
}
return this.getName()+" "+this.getTypeName();
};
FieldModel.prototype.getTypeName=function(){
return this.typeModel.getName();
};
FieldModel.prototype.setTypeModel=function(_3e57){
if(!(_3e57 instanceof FieldTypeModel)){
throw "Invalid parameter type in [FieldModel.prototype.setTypeModel]";
}
this.typeModel=_3e57;
this.typeModel.setModelParent(this);
};
FieldModel.prototype.getTypeModel=function(){
return this.typeModel;
};
FieldModel.prototype.getLengthAsString=function(){
var _3e58="";
if(FieldModel.DBTYPE_TEXT==this.getTypeName()){
_3e58=Integer.toString(this.getTypeModel().getMaxLength());
if(this.getTypeModel().getFixeLength()){
_3e58="["+_3e58+"]";
}
}
return _3e58;
};
FieldModel.prototype.getDatabaseModel=function(){
return this.getModelParent().getDatabaseModel();
};
FieldModel.prototype.getPersistentAttributes=function(){
var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);
att.name=this.name;
att.typeModel=this.typeModel;
return att;
};
