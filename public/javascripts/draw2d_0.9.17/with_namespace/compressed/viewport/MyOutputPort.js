/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MyOutputPort=function(_25c9){draw2d.OutputPort.call(this,_25c9);};draw2d.MyOutputPort.prototype=new draw2d.OutputPort;draw2d.MyOutputPort.prototype.type="MyOutputPort";draw2d.MyOutputPort.prototype.onDrop=function(port){if(this.getMaxFanOut()<=this.getFanOut()){return;}if(this.parentNode.id==port.parentNode.id){}else{var _25cb=new draw2d.CommandConnect(this.parentNode.workflow,this,port);_25cb.setConnection(new draw2d.ContextmenuConnection());this.parentNode.workflow.getCommandStack().execute(_25cb);}};