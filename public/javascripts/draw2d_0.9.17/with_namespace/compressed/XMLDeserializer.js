/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.XMLDeserializer=function(){alert("do not init this class. Use the static methods instead");};draw2d.XMLDeserializer.fromXML=function(node,_1cfd){var _1cfe=""+node.getAttributes().getNamedItem("type").getNodeValue();var value=node.getNodeValue();switch(_1cfe){case "int":return parseInt(""+node.getChildNodes().item(0).getNodeValue());case "string":case "String":return ""+node.getChildNodes().item(0).getNodeValue();case "Number":case "number":return parseFloat(""+node.getChildNodes().item(0).getNodeValue());case "Boolean":case "boolean":case "bool":return parseBool(""+node.getChildNodes().item(0).getNodeValue());case "dateTime":case "Date":case "date":return new Date(""+node.getChildNodes().item(0).getNodeValue());case "float":return parseFloat(""+node.getChildNodes().item(0).getNodeValue());break;}_1cfe=_1cfe.replace("@NAMESPACE"+"@","");var obj=eval("new "+_1cfe+"()");if(_1cfd!=undefined&&obj.setModelParent!=undefined){obj.setModelParent(_1cfd);}var _1d01=node.getChildNodes();for(var i=0;i<_1d01.length;i++){var child=_1d01.item(i);var _1d04=child.getNodeName();if(obj instanceof Array){_1d04=parseInt(_1d04.replace("index",""));}obj[_1d04]=draw2d.XMLDeserializer.fromXML(child,obj instanceof draw2d.AbstractObjectModel?obj:_1cfd);}return obj;};