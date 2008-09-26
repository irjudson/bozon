/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

var draw2d=new Object();draw2d.Event=function(){this.type=null;this.target=null;this.relatedTarget=null;this.cancelable=false;this.timeStamp=null;this.returnValue=true;};draw2d.Event.prototype.initEvent=function(sType,_306a){this.type=sType;this.cancelable=_306a;this.timeStamp=(new Date()).getTime();};draw2d.Event.prototype.preventDefault=function(){if(this.cancelable){this.returnValue=false;}};draw2d.Event.fireDOMEvent=function(_306b,_306c){if(document.createEvent){var evt=document.createEvent("Events");evt.initEvent(_306b,true,true);_306c.dispatchEvent(evt);}else{if(document.createEventObject){var evt=document.createEventObject();_306c.fireEvent("on"+_306b,evt);}}};draw2d.EventTarget=function(){this.eventhandlers=new Object();};draw2d.EventTarget.prototype.addEventListener=function(sType,_306f){if(typeof this.eventhandlers[sType]=="undefined"){this.eventhandlers[sType]=new Array;}this.eventhandlers[sType][this.eventhandlers[sType].length]=_306f;};draw2d.EventTarget.prototype.dispatchEvent=function(_3070){_3070.target=this;if(typeof this.eventhandlers[_3070.type]!="undefined"){for(var i=0;i<this.eventhandlers[_3070.type].length;i++){this.eventhandlers[_3070.type][i](_3070);}}return _3070.returnValue;};draw2d.EventTarget.prototype.removeEventListener=function(sType,_3073){if(typeof this.eventhandlers[sType]!="undefined"){var _3074=new Array;for(var i=0;i<this.eventhandlers[sType].length;i++){if(this.eventhandlers[sType][i]!=_3073){_3074[_3074.length]=this.eventhandlers[sType][i];}}this.eventhandlers[sType]=_3074;}};