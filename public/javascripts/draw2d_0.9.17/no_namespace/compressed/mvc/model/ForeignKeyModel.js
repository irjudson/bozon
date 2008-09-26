/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

ForeignKeyModel=function(_dcf,_dd0,_dd1,_dd2){AbstractConnectionModel.call(this);this.fromTable=_dd1;this.fromField=_dd2;this.toTable=_dcf;this.toField=_dd0;};ForeignKeyModel.prototype=new AbstractConnectionModel;ForeignKeyModel.prototype.type="ForeignKeyModel";ForeignKeyModel.prototype.getSourceModel=function(){return this.getDatabaseModel().getTableModel(this.toTable);};ForeignKeyModel.prototype.getTargetModel=function(){return this.getDatabaseModel().getTableModel(this.fromTable);};ForeignKeyModel.prototype.getSourcePortName=function(){return "out_"+this.toField;};ForeignKeyModel.prototype.getTargetPortName=function(){return "in_"+this.fromField;};ForeignKeyModel.prototype.getDatabaseModel=function(){return this.getModelParent().getDatabaseModel();};ForeignKeyModel.prototype.getPersistentAttributes=function(){var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.fromTable=this.fromTable;att.fromField=this.fromField;att.toTable=this.toTable;att.toField=this.toField;return att;};