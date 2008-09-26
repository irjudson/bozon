/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

Event=function(){this.type=null;this.target=null;this.relatedTarget=null;this.cancelable=false;this.timeStamp=null;this.returnValue=true;};Event.prototype.initEvent=function(_daf,_db0){this.type=_daf;this.cancelable=_db0;this.timeStamp=(new Date()).getTime();};Event.prototype.preventDefault=function(){if(this.cancelable){this.returnValue=false;}};Event.fireDOMEvent=function(_db1,_db2){if(document.createEvent){var evt=document.createEvent("Events");evt.initEvent(_db1,true,true);_db2.dispatchEvent(evt);}else{if(document.createEventObject){var evt=document.createEventObject();_db2.fireEvent("on"+_db1,evt);}}};EventTarget=function(){this.eventhandlers=new Object();};EventTarget.prototype.addEventListener=function(_db4,_db5){if(typeof this.eventhandlers[_db4]=="undefined"){this.eventhandlers[_db4]=new Array;}this.eventhandlers[_db4][this.eventhandlers[_db4].length]=_db5;};EventTarget.prototype.dispatchEvent=function(_db6){_db6.target=this;if(typeof this.eventhandlers[_db6.type]!="undefined"){for(var i=0;i<this.eventhandlers[_db6.type].length;i++){this.eventhandlers[_db6.type][i](_db6);}}return _db6.returnValue;};EventTarget.prototype.removeEventListener=function(_db8,_db9){if(typeof this.eventhandlers[_db8]!="undefined"){var _dba=new Array;for(var i=0;i<this.eventhandlers[_db8].length;i++){if(this.eventhandlers[_db8][i]!=_db9){_dba[_dba.length]=this.eventhandlers[_db8][i];}}this.eventhandlers[_db8]=_dba;}};