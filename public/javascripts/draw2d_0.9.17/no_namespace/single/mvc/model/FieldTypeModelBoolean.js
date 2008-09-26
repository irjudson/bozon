FieldTypeModelBoolean=function(_4678){
FieldTypeModel.call(this,FieldModel.DBTYPE_BOOLEAN);
this.defaultValue=_4678;
};
FieldTypeModelBoolean.prototype.type="FieldTypeModelBoolean";
FieldTypeModelBoolean.prototype=new FieldTypeModel;
FieldTypeModelBoolean.prototype.getDefault=function(){
return this.defaultValue;
};
FieldTypeModelBoolean.prototype.setDefault=function(value){
var save=this.getDefault();
if(save==value){
return;
}
this.defaultValue=value;
this.parent.firePropertyChange(PROPERTY_DEFAULT,save,value);
};
FieldTypeModelBoolean.prototype.getPersistentAttributes=function(){
var att=FieldTypeModel.prototype.getPersistentAttributes.call(this);
att.defaultValue=this.defaultValue;
return att;
};
