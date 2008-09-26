/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

AbstractObjectModel=function(){this.listeners=new ArrayList();this.id=UUID.create();};AbstractObjectModel.prototype.type="AbstractObjectModel";AbstractObjectModel.prototype.getModelChildren=function(){return new ArrayList();};AbstractObjectModel.prototype.getModelParent=function(){return this.modelParent;};AbstractObjectModel.prototype.setModelParent=function(_1488){this.modelParent=_1488;};AbstractObjectModel.prototype.getId=function(){return this.id;};AbstractObjectModel.prototype.firePropertyChange=function(_1489,_148a,_148b){var count=this.listeners.getSize();if(count==0){return;}var event=new PropertyChangeEvent(this,_1489,_148a,_148b);for(var i=0;i<count;i++){try{this.listeners.get(i).propertyChange(event);}catch(e){}}};AbstractObjectModel.prototype.addPropertyChangeListener=function(_148f){if(_148f!=null){this.listeners.add(_148f);}};AbstractObjectModel.prototype.removePropertyChangeListener=function(_1490){if(_1490!=null){this.listeners.remove(_1490);}};AbstractObjectModel.prototype.getPersistentAttributes=function(){return {id:this.id};};