/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

EditPolicy=function(_15f7){this.policy=_15f7;};EditPolicy.DELETE="DELETE";EditPolicy.MOVE="MOVE";EditPolicy.CONNECT="CONNECT";EditPolicy.RESIZE="RESIZE";EditPolicy.prototype.type="EditPolicy";EditPolicy.prototype.getPolicy=function(){return this.policy;};