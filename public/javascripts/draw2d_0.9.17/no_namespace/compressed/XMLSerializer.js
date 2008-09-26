/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

XMLSerializer=function(){alert("do not init this class. Use the static methods instead");};XMLSerializer.toXML=function(obj,_431,_432){if(_431==undefined){_431="model";}_432=_432?_432:"";var t=XMLSerializer.getTypeName(obj);var s=_432+"<"+_431+" type=\""+t+"\">";switch(t){case "int":case "number":case "string":case "boolean":s+=obj;break;case "date":s+=obj.toLocaleString();break;case "Array":case "array":s+="\n";for(var i=0;i<obj.length;i++){s+=XMLSerializer.toXML(obj[i],("index"+i),_432+"   ");}s+=_432;break;default:if(obj!=null){s+="\n";if(obj instanceof ArrayList){obj.trimToSize();}var _436=obj.getPersistentAttributes();for(var name in _436){s+=XMLSerializer.toXML(_436[name],name,_432+"   ");}s+=_432;}break;}s+="</"+_431+">\n";return s;};XMLSerializer.isSimpleVar=function(t){switch(t){case "int":case "string":case "String":case "Number":case "number":case "Boolean":case "boolean":case "bool":case "dateTime":case "Date":case "date":case "float":return true;}return false;};XMLSerializer.getTypeName=function(obj){if(obj==null){return "undefined";}if(obj instanceof Array){return "Array";}if(obj instanceof Date){return "Date";}var t=typeof (obj);if(t=="number"){return (parseInt(obj).toString()==obj)?"int":"number";}if(XMLSerializer.isSimpleVar(t)){return t;}return obj.type.replace("@"+"NAMESPACE"+"@","");};