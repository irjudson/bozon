/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

End=function(){ImageFigure.call(this,this.type+".png");this.inputPort=null;this.setDimension(50,50);};End.prototype=new ImageFigure;End.prototype.type="End";End.prototype.setWorkflow=function(_1256){ImageFigure.prototype.setWorkflow.call(this,_1256);if(_1256!=null&&this.inputPort==null){this.inputPort=new InputPort();this.inputPort.setWorkflow(_1256);this.inputPort.setBackgroundColor(new Color(115,115,245));this.addPort(this.inputPort,0,this.height/2);}};