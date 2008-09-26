/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.XMLSerializer_01=function(){};draw2d.XMLSerializer_01.prototype.type="XMLSerializer_01";draw2d.XMLSerializer_01.prototype.toXML=function(_26c6){var xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n";xml=xml+"<form>\n";var _26c8=_26c6.getFigures();for(var i=0;i<_26c8.getSize();i++){var _26ca=_26c8.get(i);xml=xml+"<"+_26ca.type+" x=\""+_26ca.getX()+"\" y=\""+_26ca.getY()+"\" id=\""+_26ca.getId()+"\">\n";xml=xml+this.getPropertyXML(_26ca,"   ");if(_26ca instanceof draw2d.CompartmentFigure){xml=xml+this.getChildXML(_26ca,"   ");}xml=xml+"</"+_26ca.type+">\n";}xml=xml+"</form>\n";return xml;};draw2d.XMLSerializer_01.prototype.getChildXML=function(_26cb,_26cc){var xml="";var _26ce=_26cb.getChildren();for(var i=0;i<_26ce.getSize();i++){var _26d0=_26ce.get(i);xml=xml+_26cc+"<"+_26d0.type+" x=\""+_26d0.getX()+"\" y=\""+_26d0.getY()+"\" id=\""+_26d0.getId()+"\">\n";xml=xml+this.getPropertyXML(_26d0,"   "+_26cc);if(_26d0 instanceof draw2d.CompartmentFigure){xml=xml+this.getChildXML(_26d0,"   "+_26cc);}xml=xml+_26cc+"</"+_26d0.type+">\n";}return xml;};draw2d.XMLSerializer_01.prototype.getPropertyXML=function(_26d1,_26d2){var xml="";var _26d4=_26d1.getProperties();for(key in _26d4){var value=_26d4[key];if(value!=null){xml=xml+_26d2+"<property name=\""+key+"\" value=\""+value+"\">\n";}}return xml;};