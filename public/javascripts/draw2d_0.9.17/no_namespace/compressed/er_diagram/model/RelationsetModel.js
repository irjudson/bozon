/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

RelationsetModel=function(){this.relations=new ArrayList();this.nonPersistentTableAliases=new ArrayList();};RelationModel.prototype.type="RelationModel";RelationsetModel.prototype.getRelationModels=function(){return this.relations;};RelationsetModel.prototype.getTableAliasModels=function(){return this.nonPersistentTableAliases;};RelationsetModel.prototype.addRelationModel=function(_bf0){this.relations.add(_bf0);if(this.nonPersistentTableAliases.indexOf(_bf0.getToTableModel())<=0){this.nonPersistentTableAliases.add(_bf0.getToTableModel());}if(this.nonPersistentTableAliases.indexOf(_bf0.getFromTableModel())<=0){this.nonPersistentTableAliases.add(_bf0.getFromTableModel());}};RelationsetModel.prototype.getPosition=function(_bf1){return new Point(100,100);};