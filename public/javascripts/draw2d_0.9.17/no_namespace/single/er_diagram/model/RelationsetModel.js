RelationsetModel=function(){
this.relations=new ArrayList();
this.nonPersistentTableAliases=new ArrayList();
};
RelationModel.prototype.type="RelationModel";
RelationsetModel.prototype.getRelationModels=function(){
return this.relations;
};
RelationsetModel.prototype.getTableAliasModels=function(){
return this.nonPersistentTableAliases;
};
RelationsetModel.prototype.addRelationModel=function(_3c68){
this.relations.add(_3c68);
if(this.nonPersistentTableAliases.indexOf(_3c68.getToTableModel())<=0){
this.nonPersistentTableAliases.add(_3c68.getToTableModel());
}
if(this.nonPersistentTableAliases.indexOf(_3c68.getFromTableModel())<=0){
this.nonPersistentTableAliases.add(_3c68.getFromTableModel());
}
};
RelationsetModel.prototype.getPosition=function(_3c69){
return new Point(100,100);
};
