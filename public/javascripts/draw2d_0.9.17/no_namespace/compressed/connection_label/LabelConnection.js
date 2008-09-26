/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

LabelConnection=function(){Connection.call(this);var _424=new Label("Message");_424.setBackgroundColor(new Color(230,230,250));_424.setBorder(new LineBorder(1));this.addFigure(_424,new ManhattanMidpointLocator(this));};LabelConnection.prototype=new Connection;LabelConnection.prototype.type="LabelConnection";