ForeignKeyFigure=function(){
Connection.call(this);
this.setRouter(new ManhattanConnectionRouter());
};
ForeignKeyFigure.prototype=new Connection();
ForeignKeyFigure.prototype.type="ForeignKeyFigure";
