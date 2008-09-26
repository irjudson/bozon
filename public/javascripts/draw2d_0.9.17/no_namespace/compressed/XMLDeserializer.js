/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

XMLDeserializer=function(){alert("do not init this class. Use the static methods instead");};XMLDeserializer.fromXML=function(node,_e0b){var _e0c=""+node.getAttributes().getNamedItem("type").getNodeValue();var _e0d=node.getNodeValue();switch(_e0c){case "int":return parseInt(""+node.getChildNodes().item(0).getNodeValue());case "string":case "String":return ""+node.getChildNodes().item(0).getNodeValue();case "Number":case "number":return parseFloat(""+node.getChildNodes().item(0).getNodeValue());case "Boolean":case "boolean":case "bool":return parseBool(""+node.getChildNodes().item(0).getNodeValue());case "dateTime":case "Date":case "date":return new Date(""+node.getChildNodes().item(0).getNodeValue());case "float":return parseFloat(""+node.getChildNodes().item(0).getNodeValue());break;}_e0c=_e0c.replace("@NAMESPACE"+"@","");var obj=eval("new "+_e0c+"()");if(_e0b!=undefined&&obj.setModelParent!=undefined){obj.setModelParent(_e0b);}var _e0f=node.getChildNodes();for(var i=0;i<_e0f.length;i++){var _e11=_e0f.item(i);var _e12=_e11.getNodeName();if(obj instanceof Array){_e12=parseInt(_e12.replace("index",""));}obj[_e12]=XMLDeserializer.fromXML(_e11,obj instanceof AbstractObjectModel?obj:_e0b);}return obj;};