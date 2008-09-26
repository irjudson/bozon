/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

AnnotationDialog=function(_1e4){this.figure=_1e4;Dialog.call(this);this.setDimension(400,100);};AnnotationDialog.prototype=new Dialog;AnnotationDialog.prototype.type="AnnotationDialog";AnnotationDialog.prototype.createHTMLElement=function(){var item=Dialog.prototype.createHTMLElement.call(this);var _1e6=document.createElement("form");_1e6.style.position="absolute";_1e6.style.left="10px";_1e6.style.top="30px";_1e6.style.width="375px";_1e6.style.font="normal 10px verdana";item.appendChild(_1e6);this.label=document.createTextNode("Text");_1e6.appendChild(this.label);this.input=document.createElement("input");this.input.style.border="1px solid gray";this.input.style.font="normal 10px verdana";this.input.type="text";var _1e7=this.figure.getText();if(_1e7){this.input.value=_1e7;}else{this.input.value="";}this.input.style.width="100%";_1e6.appendChild(this.input);this.input.focus();return item;};AnnotationDialog.prototype.onOk=function(){this.workflow.getCommandStack().execute(new CommandSetText(this.figure,this.input.value));this.workflow.removeFigure(this);};