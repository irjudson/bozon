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

/*
    1             2               3
      O-----------O-------------O
      |                         |
      |                         |
    8 O           + 9           O 4
      |                         |
      |                         |
      O-----------O-------------O
    7             6               5

TYPE
*/

/**
 * 
 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 */
ResizeHandle=function(/*:Workflow*/ workflow,  /*:int*/ type)
{
  Rectangle.call(this,5,5);
  /** @private **/
  this.type = type;
  var offset= this.getWidth();
  var offset2 = offset/2;
  switch(this.type)
  {
    case 1:
      this.setSnapToGridAnchor(new Point(offset,offset));
      break;
    case 2:
      this.setSnapToGridAnchor(new Point(offset2,offset));
      break;
    case 3:
      this.setSnapToGridAnchor(new Point(0,offset));
      break;
    case 4:
      this.setSnapToGridAnchor(new Point(0,offset2));
      break;
    case 5:
      this.setSnapToGridAnchor(new Point(0,0));
      break;
    case 6:
      this.setSnapToGridAnchor(new Point(offset2,0));
      break;
    case 7:
      this.setSnapToGridAnchor(new Point(offset,0));
      break;
    case 8:
      this.setSnapToGridAnchor(new Point(offset,offset2));
    case 9:
      this.setSnapToGridAnchor(new Point(offset2,offset2));
      break;
  }
  this.setBackgroundColor(new  Color(0,255,0));
  this.setWorkflow(workflow);
  this.setZOrder(10000);
}

ResizeHandle.prototype = new Rectangle;
/** @private **/
ResizeHandle.prototype.type="ResizeHandle";


ResizeHandle.prototype.getSnapToDirection=function()
{
  switch(this.type)
  {
    case 1:
     return SnapToHelper.NORTH_WEST;
    case 2:
     return SnapToHelper.NORTH;
    case 3:
     return SnapToHelper.NORTH_EAST;
    case 4:
     return SnapToHelper.EAST;
    case 5:
     return SnapToHelper.SOUTH_EAST;
    case 6:
     return SnapToHelper.SOUTH;
    case 7:
     return SnapToHelper.SOUTH_WEST;
    case 8:
     return SnapToHelper.WEST;
    case 9:
     return SnapToHelper.CENTER;
  }
}

/**
 * Will be called after a drag and drop action.<br>
 * Sub classes can override this method to implement additional stuff. Don't forget to call
 * the super implementation via <code>Figure.prototype.onDragend.call(this);</code>
 * @private
 **/
ResizeHandle.prototype.onDragend = function()
{
  var figure = this.workflow.currentSelection;

  // An non draggable resizeHandle doesn't create a move/resize command.
  // This happens if the selected figure has set the "nonResizeable" flag.
  //
  if(this.commandMove!=null)
  {
     this.commandMove.setPosition(figure.getX(), figure.getY());
     this.workflow.getCommandStack().execute(this.commandMove);
     this.commandMove   = null;
  }

  if(this.commandResize!=null)
  {
     this.commandResize.setDimension(figure.getWidth(), figure.getHeight());
     this.workflow.getCommandStack().execute(this.commandResize);
     this.commandResize = null;
  }

  this.workflow.hideSnapToHelperLines();
}

/**
 * Set the position of the object.<br>
 * The ResizeHandle overrides the Figure.setPosition method. The base
 * class updates the resize handles during the update of the Dimension/Position. This
 * is not neccessary for the ResizeHandles. Performance issue.
 * 
 * @param {int} xPos The new x coordinate of the figure
 * @param {int} yPos The new y coordinate of the figure 
 **/
ResizeHandle.prototype.setPosition=function(/*:int*/ xPos , /*:int*/yPos )
{
  this.x = xPos;
  this.y = yPos;

  this.html.style.left = this.x+"px";
  this.html.style.top  = this.y+"px";
}

/**
 * Will be called if the drag and drop action beginns. You can return [false] if you
 * want avoid the that the figure can be move.
 * 
 * @type boolean
 **/
ResizeHandle.prototype.onDragstart = function(/*:int*/ x, /*:int*/ y)
{
  // This happens if the selected figure has set the "nonResizeable" flag
  // In this case the ResizeHandle can't be dragged. => no resize
  //
  if(!this.canDrag)
    return false;

  var figure = this.workflow.currentSelection;

  this.commandMove  = figure.createCommand(new EditPolicy(EditPolicy.MOVE));
  this.commandResize= figure.createCommand(new EditPolicy(EditPolicy.RESIZE));

//  this.commandMove   = new CommandMove(figure,figure.getX(), figure.getY());
//  this.commandResize = new CommandResize(figure, figure.getWidth(),figure.getHeight());

  return true;
}


/**
 *
 **/
ResizeHandle.prototype.onDrag = function()
{
  var oldX = this.getX()
  var oldY = this.getY();
  Rectangle.prototype.onDrag.call(this);
  var diffX = oldX-this.getX();
  var diffY = oldY-this.getY();

  var objPosX = this.workflow.currentSelection.getX();
  var objPosY = this.workflow.currentSelection.getY();
  var objWidth= this.workflow.currentSelection.getWidth();
  var objHeight= this.workflow.currentSelection.getHeight();
  switch(this.type)
  {
    case 1:
      this.workflow.currentSelection.setPosition(objPosX-diffX, objPosY-diffY);
      this.workflow.currentSelection.setDimension(objWidth+diffX, objHeight+diffY);
      break;
    case 2:
      this.workflow.currentSelection.setPosition(objPosX, objPosY-diffY);
      this.workflow.currentSelection.setDimension(objWidth, objHeight+diffY);
      break;
    case 3:
      this.workflow.currentSelection.setPosition(objPosX, objPosY-diffY);
      this.workflow.currentSelection.setDimension(objWidth-diffX, objHeight+diffY);
      break;
    case 4:
      this.workflow.currentSelection.setPosition(objPosX, objPosY);
      this.workflow.currentSelection.setDimension(objWidth-diffX, objHeight);
      break;
    case 5:
      this.workflow.currentSelection.setPosition(objPosX, objPosY);
      this.workflow.currentSelection.setDimension(objWidth-diffX, objHeight-diffY);
      break;
    case 6:
      this.workflow.currentSelection.setPosition(objPosX, objPosY);
      this.workflow.currentSelection.setDimension(objWidth, objHeight-diffY);
      break;
    case 7:
      this.workflow.currentSelection.setPosition(objPosX-diffX, objPosY);
      this.workflow.currentSelection.setDimension(objWidth+diffX, objHeight-diffY);
      break;
    case 8:
      this.workflow.currentSelection.setPosition(objPosX-diffX, objPosY);
      this.workflow.currentSelection.setDimension(objWidth+diffX, objHeight);
      break;
  }
  this.workflow.moveResizeHandles(this.workflow.getCurrentSelection());
}

ResizeHandle.prototype.setCanDrag=function(/*:boolean*/ flag)
{
  Rectangle.prototype.setCanDrag.call(this,flag);
  if(!flag)
  {
    this.html.style.cursor="";
    return;
  }

  switch(this.type)
  {
    case 1:
      this.html.style.cursor="nw-resize";
      break;
    case 2:
      this.html.style.cursor="s-resize";
      break;
    case 3:
      this.html.style.cursor="ne-resize";
      break;
    case 4:
      this.html.style.cursor="w-resize";
      break;
    case 5:
      this.html.style.cursor="se-resize";
      break;
    case 6:
      this.html.style.cursor="n-resize";
      break;
    case 7:
      this.html.style.cursor="sw-resize";
      break;
    case 8:
      this.html.style.cursor="e-resize";
      break;
    case 9:
      this.html.style.cursor="resize";
      break;
  }
}

/**
 *
 **/
ResizeHandle.prototype.onKeyDown=function(/*:int*/keyCode, /*:boolean*/ctrl)
{
  // don't call the parent function. The parent functions delete this object
  // and a resize handle can't be deleted.
  this.workflow.onKeyDown(keyCode,ctrl);
}


ResizeHandle.prototype.fireMoveEvent=function()
{
  // a resizeHandle doesnÄt ifre this event.
  //Normale this set the document dirty. This is not neccessary for a ResizeHandle.
}