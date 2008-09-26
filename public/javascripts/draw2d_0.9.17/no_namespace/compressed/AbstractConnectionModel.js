/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

AbstractConnectionModel=function(){AbstractObjectModel.call(this);};AbstractConnectionModel.prototype=new AbstractObjectModel;AbstractConnectionModel.prototype.type="AbstractConnectionModel";AbstractConnectionModel.prototype.getSourceModel=function(){throw "you must override the method [AbstractConnectionModel.prototype.getSourceModel]";};AbstractConnectionModel.prototype.getTargetModel=function(){throw "you must override the method [AbstractConnectionModel.prototype.getTargetModel]";};AbstractConnectionModel.prototype.getSourcePortName=function(){throw "you must override the method [AbstractConnectionModel.prototype.getSourceModel]";};AbstractConnectionModel.prototype.getTargetPortName=function(){throw "you must override the method [AbstractConnectionModel.prototype.getTargetModel]";};