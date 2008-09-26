FieldModel=function(name,label){
this.name=name;
this.label=label;
};
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
FieldModel.prototype.getLabel=function(){
return this.label;
};
FieldModel.prototype.getName=function(){
return this.name;
};
FieldModel.prototype.getExtendedDescriptionLabel=function(){
if(this.getTypeName()==FieldModel.DBTYPE_TEXT){
return this.getName()+" "+this.getTypeName()+"<"+this.getLengthAsString()+">";
}
return this.getName()+" "+this.getTypeName();
};
FieldModel.prototype.getTableModel=function(){
return this.table;
};
FieldModel.prototype.getTypeName=function(){
return this.typeModel.getName();
};
FieldModel.prototype.setTableModel=function(_3e60){
if(!(_3e60 instanceof TableModel)){
throw "Invalid parameter type in [FieldModel.prototype.setTableModel]";
}
this.table=_3e60;
};
FieldModel.prototype.setTypeModel=function(_3e61){
if(!(_3e61 instanceof FieldTypeModel)){
throw "Invalid parameter type in [FieldModel.prototype.setTypeModel]";
}
this.typeModel=_3e61;
this.typeModel.setParent(this);
};
FieldModel.prototype.getTypeModel=function(){
return this.typeModel;
};
FieldModel.prototype.getLengthAsString=function(){
var _3e62="";
if(FieldModel.DBTYPE_TEXT==this.getTypeName()){
_3e62=Integer.toString(this.getTypeModel().getMaxLength());
if(this.getTypeModel().getFixeLength()){
_3e62="["+_3e62+"]";
}
}
return _3e62;
};
