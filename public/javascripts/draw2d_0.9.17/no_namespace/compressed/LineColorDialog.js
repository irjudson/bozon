/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

LineColorDialog=function(_1dd){ColorDialog.call(this);this.figure=_1dd;var _1de=_1dd.getColor();this.updateH(this.rgb2hex(_1de.getRed(),_1de.getGreen(),_1de.getBlue()));};LineColorDialog.prototype=new ColorDialog;LineColorDialog.prototype.type="LineColorDialog";LineColorDialog.prototype.onOk=function(){var _1df=this.workflow;ColorDialog.prototype.onOk.call(this);if(typeof this.figure.setColor=="function"){_1df.getCommandStack().execute(new CommandSetColor(this.figure,this.getSelectedColor()));if(_1df.getCurrentSelection()==this.figure){_1df.setCurrentSelection(this.figure);}}};