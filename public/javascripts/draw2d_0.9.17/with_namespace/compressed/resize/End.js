/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.End=function(){draw2d.Node.call(this);this.inputPort1=null;this.inputPort2=null;this.setDimension(50,50);};draw2d.End.prototype=new draw2d.Node;draw2d.End.prototype.type="End";draw2d.End.prototype.setWorkflow=function(_2047){draw2d.Node.prototype.setWorkflow.call(this,_2047);if(_2047!=null){this.inputPort1=new draw2d.InputPort();this.inputPort1.setWorkflow(_2047);this.inputPort1.setBackgroundColor(new draw2d.Color(115,115,245));this.addPort(this.inputPort1,0,this.height/3);this.inputPort2=new draw2d.InputPort();this.inputPort2.setWorkflow(_2047);this.inputPort2.setBackgroundColor(new draw2d.Color(115,115,245));this.addPort(this.inputPort2,0,this.height/3*2);}};draw2d.End.prototype.setDimension=function(w,h){draw2d.Node.prototype.setDimension.call(this,w,h);if(this.inputPort1!=null){this.inputPort1.setPosition(0,this.height/3);this.inputPort2.setPosition(0,this.height/3*2);}};