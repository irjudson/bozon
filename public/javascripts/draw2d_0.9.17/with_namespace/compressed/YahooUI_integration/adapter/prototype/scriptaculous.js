/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

var Scriptaculous={Version:"1.7.0",require:function(_1878){document.write("<script type=\"text/javascript\" src=\""+_1878+"\"></script>");},load:function(){if((typeof Prototype=="undefined")||(typeof Element=="undefined")||(typeof Element.Methods=="undefined")||parseFloat(Prototype.Version.split(".")[0]+"."+Prototype.Version.split(".")[1])<1.5){throw ("script.aculo.us requires the Prototype JavaScript framework >= 1.5.0");}$A(document.getElementsByTagName("script")).findAll(function(s){return (s.src&&s.src.match(/scriptaculous\.js(\?.*)?$/));}).each(function(s){var path=s.src.replace(/scriptaculous\.js(\?.*)?$/,"");var _187c=s.src.match(/\?.*load=([a-z,]*)/);(_187c?_187c[1]:"builder,effects,dragdrop,controls,slider").split(",").each(function(_187d){Scriptaculous.require(path+_187d+".js");});});}};Scriptaculous.load();