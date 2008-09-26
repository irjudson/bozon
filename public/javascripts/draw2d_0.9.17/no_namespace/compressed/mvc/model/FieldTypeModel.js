/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

FieldTypeModel=function(name){AbstractObjectModel.call(this);this.name=name;this.parent=null;};FieldTypeModel.prototype=new AbstractObjectModel;FieldTypeModel.prototype.type="FieldTypeModel";FieldTypeModel.prototype.getName=function(){return this.name;};FieldTypeModel.prototype.getDatabaseModel=function(){return this.getModelParent().getDatabaseModel();};FieldTypeModel.prototype.getPersistentAttributes=function(){var att=AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.name=this.name;return att;};