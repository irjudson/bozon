/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

function trace(_2ea0){var _2ea1=openwindow("about:blank",700,400);_2ea1.document.writeln("<pre>"+_2ea0+"</pre>");}function openwindow(url,width,_2ea4){var left=(screen.width-width)/2;var top=(screen.height-_2ea4)/2;property="left="+left+", top="+top+", toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,alwaysRaised,width="+width+",height="+_2ea4;return window.open(url,"_blank",property);}function dumpObject(obj){trace("----------------------------------------------------------------------------");trace("- Object dump");trace("----------------------------------------------------------------------------");for(var i in obj){try{if(typeof obj[i]!="function"){trace(i+" --&gt; "+obj[i]);}}catch(e){}}for(var i in obj){try{if(typeof obj[i]=="function"){trace(i+" --&gt; "+obj[i]);}}catch(e){}}trace("----------------------------------------------------------------------------");}