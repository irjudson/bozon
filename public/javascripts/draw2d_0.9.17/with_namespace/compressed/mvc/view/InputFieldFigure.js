/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.InputFieldFigure=function(){draw2d.InputPort.call(this);};draw2d.InputFieldFigure.prototype=new draw2d.InputPort;draw2d.InputFieldFigure.prototype.type="draw2d.InputFieldFigure";draw2d.InputFieldFigure.prototype.createCommand=function(_2a09){if(_2a09.getPolicy()==draw2d.EditPolicy.CONNECT){if(_2a09.source.parentNode.id==_2a09.target.parentNode.id){return null;}if(_2a09.source instanceof draw2d.OutputPort){return new draw2d.CommandConnect(_2a09.canvas,_2a09.source,_2a09.target);}}return draw2d.InputPort.prototype.createCommand.call(this,_2a09);};