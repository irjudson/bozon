/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

function trace(_11bc){var _11bd=openwindow("about:blank",700,400);_11bd.document.writeln("<pre>"+_11bc+"</pre>");}function openwindow(url,width,_11c0){var left=(screen.width-width)/2;var top=(screen.height-_11c0)/2;property="left="+left+", top="+top+", toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,alwaysRaised,width="+width+",height="+_11c0;return window.open(url,"_blank",property);}function dumpObject(obj){trace("----------------------------------------------------------------------------");trace("- Object dump");trace("----------------------------------------------------------------------------");for(var i in obj){try{if(typeof obj[i]!="function"){trace(i+" --&gt; "+obj[i]);}}catch(e){}}for(var i in obj){try{if(typeof obj[i]=="function"){trace(i+" --&gt; "+obj[i]);}}catch(e){}}trace("----------------------------------------------------------------------------");}