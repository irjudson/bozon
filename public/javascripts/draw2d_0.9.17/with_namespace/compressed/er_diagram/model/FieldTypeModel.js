/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.FieldTypeModel=function(name){this.name=name;this.parent=null;};draw2d.FieldTypeModel.prototype.type="FieldTypeModel";draw2d.FieldTypeModel.prototype.getName=function(){return this.name;};draw2d.FieldTypeModel.prototype.setParent=function(_1ad3){if(!(_1ad3 instanceof draw2d.FieldModel)){throw "Invalid parameter type in [FieldTypeModelBoolean.prototype.setParent]";}this.parent=_1ad3;};