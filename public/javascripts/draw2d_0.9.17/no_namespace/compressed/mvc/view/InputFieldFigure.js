/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

InputFieldFigure=function(){InputPort.call(this);};InputFieldFigure.prototype=new InputPort;InputFieldFigure.prototype.type="InputFieldFigure";InputFieldFigure.prototype.createCommand=function(_d76){if(_d76.getPolicy()==EditPolicy.CONNECT){if(_d76.source.parentNode.id==_d76.target.parentNode.id){return null;}if(_d76.source instanceof OutputPort){return new CommandConnect(_d76.canvas,_d76.source,_d76.target);}}return InputPort.prototype.createCommand.call(this,_d76);};