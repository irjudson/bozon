/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.AbstractObjectModel=function(){this.listeners=new draw2d.ArrayList();this.id=draw2d.UUID.create();};draw2d.AbstractObjectModel.prototype.type="draw2d.AbstractObjectModel";draw2d.AbstractObjectModel.prototype.getModelChildren=function(){return new draw2d.ArrayList();};draw2d.AbstractObjectModel.prototype.getModelParent=function(){return this.modelParent;};draw2d.AbstractObjectModel.prototype.setModelParent=function(_20e9){this.modelParent=_20e9;};draw2d.AbstractObjectModel.prototype.getId=function(){return this.id;};draw2d.AbstractObjectModel.prototype.firePropertyChange=function(_20ea,_20eb,_20ec){var count=this.listeners.getSize();if(count==0){return;}var event=new draw2d.PropertyChangeEvent(this,_20ea,_20eb,_20ec);for(var i=0;i<count;i++){try{this.listeners.get(i).propertyChange(event);}catch(e){}}};draw2d.AbstractObjectModel.prototype.addPropertyChangeListener=function(_20f0){if(_20f0!=null){this.listeners.add(_20f0);}};draw2d.AbstractObjectModel.prototype.removePropertyChangeListener=function(_20f1){if(_20f1!=null){this.listeners.remove(_20f1);}};draw2d.AbstractObjectModel.prototype.getPersistentAttributes=function(){return {id:this.id};};