/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

Start=function(){ImageFigure.call(this,this.type+".png");this.outputPort=null;this.setDimension(50,50);return this;};Start.prototype=new ImageFigure;Start.prototype.type="Start";Start.prototype.setWorkflow=function(_1dc){ImageFigure.prototype.setWorkflow.call(this,_1dc);if(_1dc!=null&&this.outputPort==null){this.outputPort=new OutputPort();this.outputPort.setMaxFanOut(5);this.outputPort.setWorkflow(_1dc);this.outputPort.setBackgroundColor(new Color(245,115,115));this.addPort(this.outputPort,this.width,this.height/2);}};