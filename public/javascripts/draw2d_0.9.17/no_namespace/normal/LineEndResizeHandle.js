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
 * TODO: Split the LineEndResizeHandle to ConnectionEndResizeHandle and LineEndResizeHandle!!!!
 *
 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 * @private
 * @final
 */
LineEndResizeHandle=function( /*:Workflow*/ workflow)
{
  ResizeHandle.call(this,workflow,9);
  this.setDimension(10,10);
  this.setBackgroundColor(new  Color(0,255,0));
//  this.setWorkflow(workflow);
  this.setZOrder(10000);
}

LineEndResizeHandle.prototype = new ResizeHandle;
/** @private **/
LineEndResizeHandle.prototype.type="LineEndResizeHandle";

/**
 * Will be called after a drag and drop action.<br>
 * Sub classes can override this method to implement additional stuff. Don't forget to call
 * the super implementation via <code>Figure.prototype.onDragend.call(this);</code>
 * @private
 * 
 **/
LineEndResizeHandle.prototype.onDragend = function()
{
  // A Connection glue at the corresponding port. Reset the position to the origin port
  // if we doesn't drop the ResizeHandle on a other port.
  //
  if(this.workflow.currentSelection instanceof Connection)
  {
     if(this.command!=null)
        this.command.cancel();
  }
  //
  else
  {
     // An non draggable resizeHandle doesn't create a move/resize command.
     // This happens if the selected figure has set the "nonResizeable" flag.
     //
     if(this.command!=null)
        this.workflow.getCommandStack().execute(this.command);
  }
  this.command = null;
}

/**
 * Will be called if the drag and drop action beginns. You can return [false] if you
 * want avoid the that the figure can be move.
 *
 *
 * @param {int} x The x position where the mouse has been clicked in the figure
 * @param {int} y The y position where the mouse has been clicked in the figure
 * @type boolean
 **/
LineEndResizeHandle.prototype.onDragstart = function(/*:int*/ x, /*:int*/ y)
{
  // This happens if the selected figure has set the "nonResizeable" flag
  // In this case the ResizeHandle can't be dragged. => no resize
  //
  if(!this.canDrag)
    return false;

  this.command = this.workflow.currentSelection.createCommand(new EditPolicy(EditPolicy.MOVE));

  return true;
}

/**
 *
 **/
LineEndResizeHandle.prototype.onDrag = function()
{
  var oldX = this.getX()
  var oldY = this.getY();
  Rectangle.prototype.onDrag.call(this);
  var diffX = oldX-this.getX();
  var diffY = oldY-this.getY();

  var objPos = this.workflow.currentSelection.getEndPoint();

  var line = this.workflow.currentSelection;
  line.setEndPoint(objPos.x-diffX, objPos.y-diffY);
  line.isMoving = true;
}

/**
 * Resizehandle has ben drop on a InputPort/OutputPort.
 * @private
 **/
LineEndResizeHandle.prototype.onDrop = function(/*:Port*/ dropTarget)
{
  var line = this.workflow.currentSelection;
  line.isMoving=false;
  if(line instanceof Connection)
  {
     this.command.setNewPorts(line.getSource(),dropTarget);
     this.getWorkflow().getCommandStack().execute(this.command);
  }
  this.command = null;
}
