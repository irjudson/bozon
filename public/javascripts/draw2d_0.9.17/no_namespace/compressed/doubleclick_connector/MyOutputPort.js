/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

MyOutputPort=function(_98){OutputPort.call(this,_98);};MyOutputPort.prototype=new OutputPort;MyOutputPort.prototype.onDrop=function(_99){if(this.getMaxFanOut()<=this.getFanOut()){return;}if(this.parentNode.id==_99.parentNode.id){}else{var _9a=new CommandConnect(this.parentNode.workflow,this,_99);_9a.setConnection(new DoubleclickConnection());this.parentNode.workflow.getCommandStack().execute(_9a);}};