/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

String.prototype.trim=function(){return (this.replace(new RegExp("^([\\s]+)|([\\s]+)$","gm"),""));};String.prototype.lefttrim=function(){return (this.replace(new RegExp("^[\\s]+","gm"),""));};String.prototype.righttrim=function(){return (this.replace(new RegExp("[\\s]+$","gm"),""));};String.prototype.between=function(left,right,_3035){if(!_3035){_3035=0;}var li=this.indexOf(left,_3035);if(li==-1){return null;}var ri=this.indexOf(right,li);if(ri==-1){return null;}return this.substring(li+left.length,ri);};