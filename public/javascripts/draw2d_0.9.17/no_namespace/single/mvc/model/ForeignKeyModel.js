ForeignKeyModel=function(_3e47,_3e48,_3e49,_3e4a){
AbstractConnectionModel.call(this);
this.fromTable=_3e49;
this.fromField=_3e4a;
this.toTable=_3e47;
this.toField=_3e48;
};
ForeignKeyModel.prototype=new AbstractConnectionModel;
ForeignKeyModel.prototype.type="ForeignKeyModel";
ForeignKeyModel.prototype.getSourceModel=function(){
return this.getDatabaseModel().getTableModel(this.toTable);
};
ForeignKeyModel.prototype.getTargetModel=function(){
return this.getDatabaseModel().getTableModel(this.fromTable);
};
ForeignKeyModel.prototype.getSourcePortName=function(){
return "out_"+this.toField;
};
ForeignKeyModel.prototype.getTargetPortName=function(){
return "in_"+this.fromField;
};
ForeignKeyModel.prototype.getDatabaseModel=function(){
return this.getModelParent().getDatabaseModel();
};
ForeignKeyModel.prototype.getPersistentAttributes=function(){
var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);
att.fromTable=this.fromTable;
att.fromField=this.fromField;
att.toTable=this.toTable;
att.toField=this.toField;
return att;
};
