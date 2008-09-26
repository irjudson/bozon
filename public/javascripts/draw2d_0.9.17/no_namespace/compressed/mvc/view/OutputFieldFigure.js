/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

OutputFieldFigure=function(){OutputPort.call(this);};OutputFieldFigure.prototype=new OutputPort;OutputFieldFigure.prototype.createCommand=function(_56a){if(_56a.getPolicy()==EditPolicy.CONNECT){if(_56a.source.parentNode.id==_56a.target.parentNode.id){return null;}if(_56a.source instanceof InputPort){return new CommandConnect(_56a.canvas,_56a.target,_56a.source);}return null;}return Port.prototype.createCommand.call(this,_56a);};