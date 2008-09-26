FieldTypeModel=function(name){
this.name=name;
this.parent=null;
};
FieldTypeModel.prototype.type="FieldTypeModel";
FieldTypeModel.prototype.getName=function(){
return this.name;
};
FieldTypeModel.prototype.setParent=function(_3e55){
if(!(_3e55 instanceof FieldModel)){
throw "Invalid parameter type in [FieldTypeModelBoolean.prototype.setParent]";
}
this.parent=_3e55;
};
