/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

CommandStackEvent=function(_1244,_1245){this.command=_1244;this.details=_1245;};CommandStackEvent.prototype.type="CommandStackEvent";CommandStackEvent.prototype.getCommand=function(){return this.command;};CommandStackEvent.prototype.getDetails=function(){return this.details;};CommandStackEvent.prototype.isPostChangeEvent=function(){return 0!=(this.getDetails()&CommandStack.POST_MASK);};CommandStackEvent.prototype.isPreChangeEvent=function(){return 0!=(this.getDetails()&CommandStack.PRE_MASK);};