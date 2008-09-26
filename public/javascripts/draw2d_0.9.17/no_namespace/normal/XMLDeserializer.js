/* This notice must be untouched at all times.

Open-jACOB Draw2D
The latest version is available at
http://www.openjacob.org

Copyright (c) 2006 Andreas Herz. All rights reserved.
Created 5. 11. 2006 by Andreas Herz (Web: http://www.freegroup.de )

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/
XMLDeserializer=function()
{
   alert("do not init this class. Use the static methods instead");
}



XMLDeserializer.fromXML=function(/*:DOMNode*/ node, /*:Object*/ modelParent)
{
   var className = ""+node.getAttributes().getNamedItem("type").getNodeValue();
   var value = node.getNodeValue();
   switch(className)
   {
      case "int":
        return parseInt(""+node.getChildNodes().item(0).getNodeValue());
      case "string":
      case "String":
        return ""+node.getChildNodes().item(0).getNodeValue();
      case "Number":
      case "number":
        return parseFloat(""+node.getChildNodes().item(0).getNodeValue());
      case "Boolean":
      case "boolean":
      case "bool":
        return parseBool(""+node.getChildNodes().item(0).getNodeValue());
      case "dateTime":
      case "Date":
      case "date":
        return new Date(""+node.getChildNodes().item(0).getNodeValue());
      case "float":
        return parseFloat(""+node.getChildNodes().item(0).getNodeValue());
        break;
   }
   className = className.replace("@NAMESPACE"+"@","");
   var obj = eval("new "+className+"()");
   if(modelParent != undefined && obj.setModelParent!=undefined)
      obj.setModelParent(modelParent);
   var children = node.getChildNodes();
   for(var i=0;i<children.length;i++)
   {
      var child = children.item(i);
      var attName = child.getNodeName();
      if(obj instanceof Array)
        attName = parseInt(attName.replace("index",""));
      obj[attName] = XMLDeserializer.fromXML(child,obj instanceof AbstractObjectModel?obj:modelParent);
   }
   return obj;
}


