TableModel=function(){
AbstractObjectModel.call(this);
this.name="default";
this.pos=new Point(42,42);
this.fields=new ArrayList();
this.keys=new ArrayList();
};
TableModel.EVENT_FIELD_ADDED="field added";
TableModel.EVENT_KEY_ADDED="key added";
TableModel.EVENT_NAME_CHANGED="name changed";
TableModel.EVENT_POSITION_CHANGED="position changed";
TableModel.prototype=new AbstractObjectModel;
TableModel.prototype.type="TableModel";
TableModel.prototype.setName=function(name){
var save=this.name;
this.name=name;
this.firePropertyChange(TableModel.EVENT_NAME_CHANGED,save,this.name);
};
TableModel.prototype.getName=function(){
return this.name;
};
TableModel.prototype.setPosition=function(xPos,yPos){
var save=this.pos;
if(save.x==xPos&&save.y==yPos){
return;
}
this.pos=new Point(xPos,yPos);
this.firePropertyChange(TableModel.EVENT_POSITION_CHANGED,save,this.pos);
};
TableModel.prototype.getPosition=function(){
return this.pos;
};
TableModel.prototype.getForeignKeyModels=function(){
return this.keys;
};
TableModel.prototype.addForeignKeyModel=function(key){
if(!(key instanceof ForeignKeyModel)){
throw "Invalid parameter type in [TableModel.prototype.addForeignKeyModel]";
}
if(this.keys.indexOf(key)==-1){
this.keys.add(key);
key.setModelParent(this);
this.firePropertyChange(TableModel.EVENT_KEY_ADDED,null,key);
}
};
TableModel.prototype.getFieldModels=function(){
return this.fields;
};
TableModel.prototype.addFieldModel=function(field){
if(!(field instanceof FieldModel)){
throw "Invalid parameter type in [TableModel.prototype.addFieldModel]";
}
if(this.fields.indexOf(field)==-1){
this.fields.add(field);
field.setModelParent(this);
this.firePropertyChange(TableModel.EVENT_FIELD_ADDED,null,field);
}
};
TableModel.prototype.getDatabaseModel=function(){
return this.getModelParent().getDatabaseModel();
};
TableModel.prototype.getPersistentAttributes=function(){
var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);
att.name=this.name;
att.pos=this.pos;
att.fields=this.fields;
return att;
};
