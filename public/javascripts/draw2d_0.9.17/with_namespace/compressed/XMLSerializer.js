/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.XMLSerializer=function(){alert("do not init this class. Use the static methods instead");};draw2d.XMLSerializer.toXML=function(obj,_186b,_186c){if(_186b==undefined){_186b="model";}_186c=_186c?_186c:"";var t=draw2d.XMLSerializer.getTypeName(obj);var s=_186c+"<"+_186b+" type=\""+t+"\">";switch(t){case "int":case "number":case "string":case "boolean":s+=obj;break;case "date":s+=obj.toLocaleString();break;case "Array":case "array":s+="\n";for(var i=0;i<obj.length;i++){s+=draw2d.XMLSerializer.toXML(obj[i],("index"+i),_186c+"   ");}s+=_186c;break;default:if(obj!=null){s+="\n";if(obj instanceof draw2d.ArrayList){obj.trimToSize();}var _1870=obj.getPersistentAttributes();for(var name in _1870){s+=draw2d.XMLSerializer.toXML(_1870[name],name,_186c+"   ");}s+=_186c;}break;}s+="</"+_186b+">\n";return s;};draw2d.XMLSerializer.isSimpleVar=function(t){switch(t){case "int":case "string":case "String":case "Number":case "number":case "Boolean":case "boolean":case "bool":case "dateTime":case "Date":case "date":case "float":return true;}return false;};draw2d.XMLSerializer.getTypeName=function(obj){if(obj==null){return "undefined";}if(obj instanceof Array){return "Array";}if(obj instanceof Date){return "Date";}var t=typeof (obj);if(t=="number"){return (parseInt(obj).toString()==obj)?"int":"number";}if(draw2d.XMLSerializer.isSimpleVar(t)){return t;}return obj.type.replace("@"+"NAMESPACE"+"@","");};