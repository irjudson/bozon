/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MyInputPort=function(_2158){draw2d.InputPort.call(this,_2158);};draw2d.MyInputPort.prototype=new draw2d.InputPort;draw2d.MyInputPort.prototype.type="MyInputPort";draw2d.MyInputPort.prototype.onDrop=function(port){if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){return;}if(this.parentNode.id==port.parentNode.id){}else{var _215a=new draw2d.CommandConnect(this.parentNode.workflow,port,this);_215a.setConnection(new draw2d.DoubleclickConnection());this.parentNode.workflow.getCommandStack().execute(_215a);}};