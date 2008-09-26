/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

XMLSerializer_01=function(){};XMLSerializer_01.prototype.type="XMLSerializer_01";XMLSerializer_01.prototype.toXML=function(_64d){var xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n";xml=xml+"<form>\n";var _64f=_64d.getFigures();for(var i=0;i<_64f.getSize();i++){var _651=_64f.get(i);xml=xml+"<"+_651.type+" x=\""+_651.getX()+"\" y=\""+_651.getY()+"\" id=\""+_651.getId()+"\">\n";xml=xml+this.getPropertyXML(_651,"   ");if(_651 instanceof CompartmentFigure){xml=xml+this.getChildXML(_651,"   ");}xml=xml+"</"+_651.type+">\n";}xml=xml+"</form>\n";return xml;};XMLSerializer_01.prototype.getChildXML=function(_652,_653){var xml="";var _655=_652.getChildren();for(var i=0;i<_655.getSize();i++){var _657=_655.get(i);xml=xml+_653+"<"+_657.type+" x=\""+_657.getX()+"\" y=\""+_657.getY()+"\" id=\""+_657.getId()+"\">\n";xml=xml+this.getPropertyXML(_657,"   "+_653);if(_657 instanceof CompartmentFigure){xml=xml+this.getChildXML(_657,"   "+_653);}xml=xml+_653+"</"+_657.type+">\n";}return xml;};XMLSerializer_01.prototype.getPropertyXML=function(_658,_659){var xml="";var _65b=_658.getProperties();for(key in _65b){var _65c=_65b[key];if(_65c!=null){xml=xml+_659+"<property name=\""+key+"\" value=\""+_65c+"\">\n";}}return xml;};