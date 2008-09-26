RelationModel=function(_46d0,_46d1,toKey){
this.fromTable=_46d0;
this.toTable=_46d1;
this.toKey=toKey;
};
RelationModel.prototype.type="RelationModel";
RelationModel.prototype.getFromTableModel=function(){
return this.fromTable;
};
RelationModel.prototype.getToTableModel=function(){
return this.toTable;
};
