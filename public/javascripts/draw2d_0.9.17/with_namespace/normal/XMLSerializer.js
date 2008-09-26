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
draw2d.XMLSerializer=function()
{
   alert("do not init this class. Use the static methods instead");
}


draw2d.XMLSerializer.toXML=function(obj, objectName, indentSpace)
{
   if(objectName == undefined)
       objectName = "model";
   indentSpace = indentSpace?indentSpace:'';

   var t = draw2d.XMLSerializer.getTypeName(obj);
   var s = indentSpace  + '<' + objectName +  ' type="' + t + '">';

   switch(t)
   {
      case "int":
      case "number":
      case "string":
      case "boolean":
         s += obj; 
         break;
      case "date":
         s += obj.toLocaleString();
         break;
      case "Array":
      case "array":
         s += "\n";
         for(var i =0;i<obj.length;i++)
         {
            s += draw2d.XMLSerializer.toXML(obj[i], ('index' + i ), indentSpace + "   ");
         }
         s += indentSpace;
         break;
      default:
         if(obj!=null)
         {
            s += "\n";
            if(obj instanceof  draw2d.ArrayList)
               obj.trimToSize();

            var attributes = obj.getPersistentAttributes();
            for(var name in attributes)
            {
               s += draw2d.XMLSerializer.toXML(attributes[name], name, indentSpace + "   ");
            }
            s += indentSpace;
         }
      break;
   }
    s += "</" + objectName + ">\n";
    return s;
}



draw2d.XMLSerializer.isSimpleVar=function(t)
{
   switch(t)
   {
      case "int":
      case "string":
      case "String":
      case "Number":
      case "number":
      case "Boolean":
      case "boolean":
      case "bool":
      case "dateTime":
      case "Date":
      case "date":
      case "float":
      return true;
   }

   return false;
}


draw2d.XMLSerializer.getTypeName=function(obj)
{
   if (obj==null)
      return "undefined";
   if (obj instanceof Array)
      return "Array";
   if (obj instanceof Date)
      return "Date";

   var t  = typeof(obj);

   if(t=="number")
      return (parseInt(obj).toString() == obj)?"int":"number";


   if (draw2d.XMLSerializer.isSimpleVar(t))
      return t;

   return obj.type.replace("@"+"NAMESPACE"+"@","");
}
