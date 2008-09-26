/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.AnnotationDialog=function(_1ad9){this.figure=_1ad9;draw2d.Dialog.call(this);this.setDimension(400,100);};draw2d.AnnotationDialog.prototype=new draw2d.Dialog;draw2d.AnnotationDialog.prototype.type="draw2d.AnnotationDialog";draw2d.AnnotationDialog.prototype.createHTMLElement=function(){var item=draw2d.Dialog.prototype.createHTMLElement.call(this);var _1adb=document.createElement("form");_1adb.style.position="absolute";_1adb.style.left="10px";_1adb.style.top="30px";_1adb.style.width="375px";_1adb.style.font="normal 10px verdana";item.appendChild(_1adb);this.label=document.createTextNode("Text");_1adb.appendChild(this.label);this.input=document.createElement("input");this.input.style.border="1px solid gray";this.input.style.font="normal 10px verdana";this.input.type="text";var value=this.figure.getText();if(value){this.input.value=value;}else{this.input.value="";}this.input.style.width="100%";_1adb.appendChild(this.input);this.input.focus();return item;};draw2d.AnnotationDialog.prototype.onOk=function(){this.workflow.getCommandStack().execute(new draw2d.CommandSetText(this.figure,this.input.value));this.workflow.removeFigure(this);};