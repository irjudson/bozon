/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.FieldTypeModelBoolean=function(_2161){draw2d.FieldTypeModel.call(this,draw2d.FieldModel.DBTYPE_BOOLEAN);this.defaultValue=_2161;};draw2d.FieldTypeModelBoolean.prototype.type="FieldTypeModelBoolean";draw2d.FieldTypeModelBoolean.prototype=new draw2d.FieldTypeModel;draw2d.FieldTypeModelBoolean.prototype.getDefault=function(){return this.defaultValue;};draw2d.FieldTypeModelBoolean.prototype.setDefault=function(value){var save=this.getDefault();if(save==value){return;}this.defaultValue=value;this.parent.firePropertyChange(PROPERTY_DEFAULT,save,value);};