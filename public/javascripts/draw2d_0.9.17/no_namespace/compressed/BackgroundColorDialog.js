/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

BackgroundColorDialog=function(_1607){ColorDialog.call(this);this.figure=_1607;var color=_1607.getBackgroundColor();if(color!=null){this.updateH(this.rgb2hex(color.getRed(),color.getGreen(),color.getBlue()));}};BackgroundColorDialog.prototype=new ColorDialog;BackgroundColorDialog.prototype.type="BackgroundColorDialog";BackgroundColorDialog.prototype.onOk=function(){var _1609=this.workflow;ColorDialog.prototype.onOk.call(this);if(typeof this.figure.setBackgroundColor=="function"){_1609.getCommandStack().execute(new CommandSetBackgroundColor(this.figure,this.getSelectedColor()));if(_1609.getCurrentSelection()==this.figure){_1609.setCurrentSelection(this.figure);}}};