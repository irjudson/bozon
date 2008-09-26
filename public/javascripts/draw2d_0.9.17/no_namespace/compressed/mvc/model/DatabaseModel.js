/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

DatabaseModel=function(){this.tables=new ArrayList();this.name="default";};DatabaseModel.prototype=new AbstractObjectModel;DatabaseModel.prototype.type="DatabaseModel";DatabaseModel.prototype.getModelChildren=function(){return this.tables;};DatabaseModel.prototype.getTableModels=function(){return tables;};DatabaseModel.prototype.getTableModel=function(_1429){var count=this.tables.getSize();for(var i=0;i<count;i++){var table=this.tables.get(i);if(table.getName()==_1429){return table;}}return null;};DatabaseModel.prototype.getDatabaseModel=function(){return this;};DatabaseModel.prototype.getPersistentAttributes=function(){var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.tables=this.tables;att.name=this.name;return att;};