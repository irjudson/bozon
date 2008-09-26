/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

MyOutputPort=function(_91){OutputPort.call(this,_91);};MyOutputPort.prototype=new OutputPort;MyOutputPort.prototype.onDrop=function(_92){if(this.getMaxFanOut()<=this.getFanOut()){return;}if(this.parentNode.id==_92.parentNode.id){}else{var _93=new CommandConnect(this.parentNode.workflow,this,_92);_93.setConnection(new DoubleclickConnection());this.parentNode.workflow.getCommandStack().execute(_93);}};