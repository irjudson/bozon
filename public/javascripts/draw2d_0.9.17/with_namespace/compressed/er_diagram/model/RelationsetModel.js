/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

RelationsetModel=function(){this.relations=new draw2d.ArrayList();this.nonPersistentTableAliases=new draw2d.ArrayList();};RelationModel.prototype.type="RelationModel";RelationsetModel.prototype.getRelationModels=function(){return this.relations;};RelationsetModel.prototype.getTableAliasModels=function(){return this.nonPersistentTableAliases;};RelationsetModel.prototype.addRelationModel=function(_2a38){this.relations.add(_2a38);if(this.nonPersistentTableAliases.indexOf(_2a38.getToTableModel())<=0){this.nonPersistentTableAliases.add(_2a38.getToTableModel());}if(this.nonPersistentTableAliases.indexOf(_2a38.getFromTableModel())<=0){this.nonPersistentTableAliases.add(_2a38.getFromTableModel());}};RelationsetModel.prototype.getPosition=function(_2a39){return new draw2d.Point(100,100);};