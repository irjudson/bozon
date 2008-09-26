/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.BackgroundColorDialog=function(_1f6c){draw2d.ColorDialog.call(this);this.figure=_1f6c;var color=_1f6c.getBackgroundColor();if(color!=null){this.updateH(this.rgb2hex(color.getRed(),color.getGreen(),color.getBlue()));}};draw2d.BackgroundColorDialog.prototype=new draw2d.ColorDialog;draw2d.BackgroundColorDialog.prototype.type="draw2d.BackgroundColorDialog";draw2d.BackgroundColorDialog.prototype.onOk=function(){var _1f6e=this.workflow;draw2d.ColorDialog.prototype.onOk.call(this);if(typeof this.figure.setBackgroundColor=="function"){_1f6e.getCommandStack().execute(new draw2d.CommandSetBackgroundColor(this.figure,this.getSelectedColor()));if(_1f6e.getCurrentSelection()==this.figure){_1f6e.setCurrentSelection(this.figure);}}};