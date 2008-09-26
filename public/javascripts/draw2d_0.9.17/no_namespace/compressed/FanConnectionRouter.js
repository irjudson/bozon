/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

FanConnectionRouter=function(){};FanConnectionRouter.prototype=new NullConnectionRouter;FanConnectionRouter.prototype.type="FanConnectionRouter";FanConnectionRouter.prototype.route=function(conn){var _1629=conn.getStartPoint();var toPt=conn.getEndPoint();var lines=conn.getSource().getConnections();var _162c=new ArrayList();var index=0;for(var i=0;i<lines.getSize();i++){var _162f=lines.get(i);if(_162f.getTarget()==conn.getTarget()||_162f.getSource()==conn.getTarget()){_162c.add(_162f);if(conn==_162f){index=_162c.getSize();}}}if(_162c.getSize()>1){this.routeCollision(conn,index);}else{NullConnectionRouter.prototype.route.call(this,conn);}};FanConnectionRouter.prototype.routeNormal=function(conn){conn.addPoint(conn.getStartPoint());conn.addPoint(conn.getEndPoint());};FanConnectionRouter.prototype.routeCollision=function(conn,index){var start=conn.getStartPoint();var end=conn.getEndPoint();conn.addPoint(start);var _1635=10;var _1636=new Point((end.x+start.x)/2,(end.y+start.y)/2);var _1637=end.getPosition(start);var ray;if(_1637==PositionConstants.SOUTH||_1637==PositionConstants.EAST){ray=new Point(end.x-start.x,end.y-start.y);}else{ray=new Point(start.x-end.x,start.y-end.y);}var _1639=Math.sqrt(ray.x*ray.x+ray.y*ray.y);var _163a=_1635*ray.x/_1639;var _163b=_1635*ray.y/_1639;var _163c;if(index%2==0){_163c=new Point(_1636.x+(index/2)*(-1*_163b),_1636.y+(index/2)*_163a);}else{_163c=new Point(_1636.x+(index/2)*_163b,_1636.y+(index/2)*(-1*_163a));}conn.addPoint(_163c);conn.addPoint(end);};