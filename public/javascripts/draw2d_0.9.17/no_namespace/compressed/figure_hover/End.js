/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

End=function(){Node.call(this);this.inputPort1=null;this.inputPort2=null;this.setDimension(50,50);this.setBackgroundColor(new Color(255,128,255));};End.prototype=new Node;End.prototype.type="End";End.prototype.setWorkflow=function(_15ef){Node.prototype.setWorkflow.call(this,_15ef);if(_15ef!=null){this.inputPort1=new InputPort();this.inputPort1.setWorkflow(_15ef);this.inputPort1.setBackgroundColor(new Color(115,115,245));this.addPort(this.inputPort1,0,this.height/3);this.inputPort2=new InputPort();this.inputPort2.setWorkflow(_15ef);this.inputPort2.setBackgroundColor(new Color(115,115,245));this.addPort(this.inputPort2,0,this.height/3*2);}};End.prototype.setDimension=function(w,h){Node.prototype.setDimension.call(this,w,h);if(this.inputPort1!=null){this.inputPort1.setPosition(0,this.height/3);this.inputPort2.setPosition(0,this.height/3*2);}};End.prototype.onMouseEnter=function(){this.setBackgroundColor(new Color(255,145,255));};End.prototype.onMouseLeave=function(){this.setBackgroundColor(new Color(255,128,255));};