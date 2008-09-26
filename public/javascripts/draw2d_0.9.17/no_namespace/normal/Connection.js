/* This notice must be untouched at all times.

Open-jACOB Draw2D
The latest version is available at
http://www.openjacob.org

Copyright (c) 2006 Andreas Herz. All rights reserved.
Created 5. 11. 2006 by Andreas Herz (Web: http://www.freegroup.de )

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/

/**
 * @class A Connection is the line between two {@link Port}s.
 *
 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 */
Connection=function()
{
  Line.call(this);

  /** @private **/
  this.sourcePort = null;
  /** @private **/
  this.targetPort = null;

  /** @private **/
  this.sourceDecorator = null; /*:ConnectionDecorator*/

  /** @private **/
  this.targetDecorator = null; /*:ConnectionDecorator*/

  /** @private **/
  this.sourceAnchor = new ConnectionAnchor();

  /** @private **/
  this.targetAnchor = new ConnectionAnchor();


  /** @private **/
  this.router = Connection.defaultRouter;

  /** @private **/
  this.lineSegments = new ArrayList();

  this.children = new ArrayList();

  this.setColor(new  Color(0,0,115));
  this.setLineWidth(1);
}

Connection.prototype = new Line;
Connection.prototype.type = "Connection";

Connection.defaultRouter = new ManhattanConnectionRouter();

Connection.setDefaultRouter=function(/*:ConnectionRouter*/ router)
{
   Connection.defaultRouter = router;
}

/**
 * @private
 **/
Connection.prototype.disconnect=function()
{
  if(this.sourcePort!=null)
  {
    this.sourcePort.detachMoveListener(this);
    this.fireSourcePortRouteEvent();
  }

  if(this.targetPort!=null)
  {
    this.targetPort.detachMoveListener(this);
    this.fireTargetPortRouteEvent();
  }
}

/**
 * @private
 **/
Connection.prototype.reconnect=function()
{
  if(this.sourcePort!=null)
  {
    this.sourcePort.attachMoveListener(this);
    this.fireSourcePortRouteEvent();
  }
  if(this.targetPort!=null)
  {
    this.targetPort.attachMoveListener(this);
    this.fireTargetPortRouteEvent();
  }
}


/**
 * You can't drag&drop the resize handles of a connector.
 * @type boolean
 **/
Connection.prototype.isResizeable=function()
{
  return true;
}

/**
 * Add a child figure to the Connection. The hands over figure doesn't support drag&drop 
 * operations. It's only a decorator for the connection.
 *
 * @param {Figure} figure the figure to add as decoration to the connection.
 * @param {ConnectionLocator} locator the locator for the child. 
**/
Connection.prototype.addFigure=function(/*:Figure*/ figure, /*:ConnectionLocator*/ locator)
{
  var entry = new Object();
  entry.figure  = figure;
  entry.locator = locator;

  this.children.add(entry);
  if(this.graphics !=null)
    this.paint();

  var oThis = this;
  var mouseDown = function()
  {
    var oEvent = arguments[0] || window.event;
    oEvent.returnValue = false;
    oThis.getWorkflow().setCurrentSelection(oThis);
    oThis.getWorkflow().showLineResizeHandles(oThis);
  }

  if (figure.getHTMLElement().addEventListener)
    figure.getHTMLElement().addEventListener("mousedown", mouseDown, false);
  else if (this.html.attachEvent)
     figure.getHTMLElement().attachEvent("onmouseup", mouseUp);
}

/**
 * Set the ConnectionDecorator for this object.
 *
 **/
Connection.prototype.setSourceDecorator=function(/*:ConnectionDecorator*/ decorator)
{
  this.sourceDecorator = decorator;
  if(this.graphics !=null)
    this.paint();
}

/**
 * Set the ConnectionDecorator for this object.
 *
 **/
Connection.prototype.setTargetDecorator=function(/*:ConnectionDecorator*/ decorator)
{
  this.targetDecorator = decorator;
  if(this.graphics !=null)
    this.paint();
}

/**
 * Set the ConnectionAnchor for this object.
 *
 **/
Connection.prototype.setSourceAnchor=function(/*:ConnectionAnchor*/ anchor)
{
  this.sourceAnchor = anchor;
  this.sourceAnchor.setOwner(this.sourcePort);
  if(this.graphics !=null)
    this.paint();
}

/**
 * Set the ConnectionAnchor for this object.
 *
 **/
Connection.prototype.setTargetAnchor=function(/*:ConnectionAnchor*/ anchor)
{
  this.targetAnchor = anchor;
  this.targetAnchor.setOwner(this.targetPort);
  if(this.graphics !=null)
    this.paint();
}


/**
 * Set the ConnectionRouter for this object.
 *
 **/
Connection.prototype.setRouter=function(/*:ConnectionRouter*/ router)
{
  if(router !=null)
   this.router = router;
  else
   this.router = new NullConnectionRouter();

  // repaint the connection with the new router
  if(this.graphics !=null)
     this.paint();
}

/**
 * Return the current active router of this connection.
 *
 * @type ConnectionRouter
 **/
Connection.prototype.getRouter=function()
{
  return this.router;
}

Connection.prototype.setWorkflow= function(/*:Workflow*/ workflow)
{
  Line.prototype.setWorkflow.call(this,workflow);
  for(var i=0; i<this.children.getSize();i++)
  {
     this.children.get(i).isAppended=false;
  }
}

/**
 * @private
 **/
Connection.prototype.paint=function()
{
  // Hack for the IE:
  // All HTML fragments of the children are corrupt If I clear the graphics context
  // This doesn't happens with the firefox.
  //
  // remove first the children before we set the innerHTML of the context to "";
  //
  for(var i=0; i<this.children.getSize();i++)
  {
     var entry = this.children.get(i);
     if(entry.isAppended==true)
        this.html.removeChild(entry.figure.getHTMLElement());
     entry.isAppended=false;
  }

  if(this.graphics ==null)
    this.graphics = new jsGraphics(this.id);
  else
    this.graphics.clear();

  this.graphics.setStroke(this.stroke);
  this.graphics.setColor(this.lineColor.getHTMLStyle());

   this.startStroke();

  // Use the internal router if any has been set....
  //
  this.router.route(this);

  // paint the decorator if any exists
  //
  if(this.getSource().getParent().isMoving==false && this.getTarget().getParent().isMoving==false )
  {
   if(this.targetDecorator!=null)
      this.targetDecorator.paint(new Graphics(this.graphics,this.getEndAngle(),this.getEndPoint()));

   if(this.sourceDecorator!=null)
      this.sourceDecorator.paint(new Graphics(this.graphics,this.getStartAngle(),this.getStartPoint()));
  }
  this.finishStroke();

  for(var i=0; i<this.children.getSize();i++)
  {
     var entry = this.children.get(i);
     this.html.appendChild(entry.figure.getHTMLElement());
     entry.isAppended=true;
     entry.locator.relocate(entry.figure);
  }
}

/**
 * Return the recalculated position of the start point if we have set an anchor.
 * 
 * @type Point
 **/
 Connection.prototype.getStartPoint= function()
 {
  if(this.isMoving==false)
     return this.sourceAnchor.getLocation(this.targetAnchor.getReferencePoint());
  else
     return Line.prototype.getStartPoint.call(this);
 }


/**
 * Return the recalculated position of the start point if we have set an anchor.
 *
 * @type Point
 **/
 Connection.prototype.getEndPoint= function()
 {
  if(this.isMoving==false)
     return this.targetAnchor.getLocation(this.sourceAnchor.getReferencePoint());
  else
     return Line.prototype.getEndPoint.call(this);
 }


/*
 * @private
 *
 **/
Connection.prototype.startStroke=function()
{
 this.oldPoint=null;
 this.lineSegments = new ArrayList();
}

/*
 * @private
 *
 **/
Connection.prototype.finishStroke=function()
{
  this.graphics.paint();
  this.oldPoint=null;
}

/**
 * Returns the fulcrms of the connection
 *
 * @return an ArrayList of type Point
 * @type ArrayList 
 **/
Connection.prototype.getPoints=function()
{
  var result = new ArrayList();
  var line;
  for(var i = 0; i< this.lineSegments.getSize();i++)
  {
     line = this.lineSegments.get(i);
     result.add(line.start);
  }
  // add the last point
  result.add(line.end);
  return result;
}

/*
 * @private
 *
 **/
Connection.prototype.addPoint=function(/*:Point*/ p)
{
  p = new Point(parseInt(p.x), parseInt(p.y));
  if(this.oldPoint!=null)
  {
    this.graphics.drawLine(this.oldPoint.x,this.oldPoint.y, p.x, p.y);
// For ConnectionRouter debugging only. All fulcrum point will be marked.
//
//    this.graphics.fillEllipse(p.x-3, p.y-3,6,6); 
//    this.graphics.drawString(""+this.lineSegments.length,p.x, p.y);

    // store the painted line segment for the "mouse selection test"
    // (required for user interaction)
    var line = new Object();
    line.start = this.oldPoint;
    line.end   = p;
    this.lineSegments.add(line);
  }


  this.oldPoint = new Object();
  this.oldPoint.x = p.x;
  this.oldPoint.y = p.y;
}


/**
 * Set the new source port of this connection. This enforce a repaint of the connection.
 *
 * @param {Port} port The new source port of this connection.
 * 
 **/
Connection.prototype.setSource=function(/*:Port*/ port)
{
  if(this.sourcePort!=null)
    this.sourcePort.detachMoveListener(this);

  this.sourcePort = port;
  if(this.sourcePort==null)
    return;
  this.sourceAnchor.setOwner(this.sourcePort);
  this.fireSourcePortRouteEvent();
  this.sourcePort.attachMoveListener(this);
  this.setStartPoint(port.getAbsoluteX(), port.getAbsoluteY());
}

/**
 * Returns the source port of this connection.
 *
 * @type Port
 **/
Connection.prototype.getSource=function()
{
  return this.sourcePort;
}

/**
 * Set the target port of this connection. This enforce a repaint of the connection.
 * 
 * @param {Port} port The new target port of this connection
 **/
Connection.prototype.setTarget=function(/*:Port*/ port)
{
  if(this.targetPort!=null)
    this.targetPort.detachMoveListener(this);

  this.targetPort = port;
  if(this.targetPort==null)
    return;
  this.targetAnchor.setOwner(this.targetPort);
  this.fireTargetPortRouteEvent();
  this.targetPort.attachMoveListener(this);
  this.setEndPoint(port.getAbsoluteX(), port.getAbsoluteY());
}

/**
 * Returns the target port of this connection.
 *
 * @type Port
 **/
Connection.prototype.getTarget=function()
{
  return this.targetPort;
}

/**
 * @see Figure#onOtherFigureMoved
 **/
Connection.prototype.onOtherFigureMoved=function(/*:Figure*/ figure)
{
  if(figure==this.sourcePort)
    this.setStartPoint(this.sourcePort.getAbsoluteX(), this.sourcePort.getAbsoluteY());
  else
    this.setEndPoint(this.targetPort.getAbsoluteX(), this.targetPort.getAbsoluteY());
}

/**
 * Checks if the hands over coordinate hits the line.
 *
 * @param {int} px the x coordinate of the test point
 * @param {int} py the y coordinate of the test point
 * @type boolean
 **/
Connection.prototype.containsPoint= function(/*:int*/ px, /*:int*/ py)
{
  for(var i = 0; i< this.lineSegments.getSize();i++)
  {
     var line = this.lineSegments.get(i);
     if(Line.hit(this.corona, line.start.x,line.start.y,line.end.x, line.end.y, px,py))
       return true;
  }
  return false;
}

Connection.prototype.getStartAngle=function()
{
  var p1 = this.lineSegments.get(0).start;
  var p2 = this.lineSegments.get(0).end;
  if(this.router instanceof BezierConnectionRouter)
  {
   p2 = this.lineSegments.get(5).end;
  }
  var length = Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
  var angle = -(180/Math.PI) *Math.asin((p1.y-p2.y)/length);

  if(angle<0)
  {
     if(p2.x<p1.x)
       angle = Math.abs(angle) + 180;
     else
       angle = 360- Math.abs(angle);
  }
  else
  {
     if(p2.x<p1.x)
       angle = 180-angle;
  }
  return angle;
}

Connection.prototype.getEndAngle=function()
{
  var p1 = this.lineSegments.get(this.lineSegments.getSize()-1).end;
  var p2 = this.lineSegments.get(this.lineSegments.getSize()-1).start;
  if(this.router instanceof BezierConnectionRouter)
  {
   p2 = this.lineSegments.get(this.lineSegments.getSize()-5).end;
  }
  var length = Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
  var angle = -(180/Math.PI) *Math.asin((p1.y-p2.y)/length);

  if(angle<0)
  {
     if(p2.x<p1.x)
       angle = Math.abs(angle) + 180;
     else
       angle = 360- Math.abs(angle);
  }
  else
  {
     if(p2.x<p1.x)
       angle = 180-angle;
  }
  return angle;
}


/**
 * @private
 **/
Connection.prototype.fireSourcePortRouteEvent=function()
{
    // enforce a repaint of all connections which are related to this port
    // this is required for a "FanConnectionRouter" or "ShortesPathConnectionRouter"
    //
   var connections = this.sourcePort.getConnections();
   for(var i=0; i<connections.getSize();i++)
   {
      connections.get(i).paint();
   }
}

/**
 * @private
 **/
Connection.prototype.fireTargetPortRouteEvent=function()
{
    // enforce a repaint of all connections which are related to this port
    // this is required for a "FanConnectionRouter" or "ShortesPathConnectionRouter"
    //
   var connections = this.targetPort.getConnections();
   for(var i=0; i<connections.getSize();i++)
   {
      connections.get(i).paint();
   }
}


/**
 * Returns the Command to perform the specified Request or null.
  *
 * @param {EditPolicy} request describes the Command being requested
 * @return null or a Command
 * @type Command
 * @since 0.9.15
 **/
Connection.prototype.createCommand=function(/*:EditPolicy*/ request)
{
  if(request.getPolicy() == EditPolicy.MOVE)
  {
    // DragDrop of a connection doesn't create a undo command at this point. This will be done in
    // the onDrop method
    return new CommandReconnect(this);
  }
  if(request.getPolicy() == EditPolicy.DELETE)
  {
    if(this.isDeleteable()==true)
      return new CommandDelete(this);
    return null;
  }

  return null;
}

