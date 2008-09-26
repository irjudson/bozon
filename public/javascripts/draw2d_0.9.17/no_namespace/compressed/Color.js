/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

Color=function(red,green,blue){if(typeof green=="undefined"){var rgb=this.hex2rgb(red);this.red=rgb[0];this.green=rgb[1];this.blue=rgb[2];}else{this.red=red;this.green=green;this.blue=blue;}};Color.prototype.type="Color";Color.prototype.getHTMLStyle=function(){return "rgb("+this.red+","+this.green+","+this.blue+")";};Color.prototype.getRed=function(){return this.red;};Color.prototype.getGreen=function(){return this.green;};Color.prototype.getBlue=function(){return this.blue;};Color.prototype.getIdealTextColor=function(){var _1436=105;var _1437=(this.red*0.299)+(this.green*0.587)+(this.blue*0.114);return (255-_1437<_1436)?new Color(0,0,0):new Color(255,255,255);};Color.prototype.hex2rgb=function(_1438){_1438=_1438.replace("#","");return ({0:parseInt(_1438.substr(0,2),16),1:parseInt(_1438.substr(2,2),16),2:parseInt(_1438.substr(4,2),16)});};Color.prototype.hex=function(){return (this.int2hex(this.red)+this.int2hex(this.green)+this.int2hex(this.blue));};Color.prototype.int2hex=function(v){v=Math.round(Math.min(Math.max(0,v),255));return ("0123456789ABCDEF".charAt((v-v%16)/16)+"0123456789ABCDEF".charAt(v%16));};Color.prototype.darker=function(_143a){var red=parseInt(Math.round(this.getRed()*(1-_143a)));var green=parseInt(Math.round(this.getGreen()*(1-_143a)));var blue=parseInt(Math.round(this.getBlue()*(1-_143a)));if(red<0){red=0;}else{if(red>255){red=255;}}if(green<0){green=0;}else{if(green>255){green=255;}}if(blue<0){blue=0;}else{if(blue>255){blue=255;}}return new Color(red,green,blue);};Color.prototype.lighter=function(_143e){var red=parseInt(Math.round(this.getRed()*(1+_143e)));var green=parseInt(Math.round(this.getGreen()*(1+_143e)));var blue=parseInt(Math.round(this.getBlue()*(1+_143e)));if(red<0){red=0;}else{if(red>255){red=255;}}if(green<0){green=0;}else{if(green>255){green=255;}}if(blue<0){blue=0;}else{if(blue>255){blue=255;}}return new Color(red,green,blue);};