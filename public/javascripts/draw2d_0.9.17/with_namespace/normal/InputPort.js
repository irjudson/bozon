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
 * 
 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 */
draw2d.InputPort=function(/*:draw2d.Figure*/ uiRepresentation)
{
  draw2d.Port.call(this, uiRepresentation);
}

draw2d.InputPort.prototype = new draw2d.Port;
/** @private **/
draw2d.InputPort.prototype.type="draw2d.InputPort";


/**
 *
 **/
draw2d.InputPort.prototype.onDragEnter = function(/*:draw2d.Port*/ port)
{
  // User drag&drop  a normal port
  if(port instanceof draw2d.OutputPort)
  {
    draw2d.Port.prototype.onDragEnter.call(this, port);
  }
  // User drag&drop a ResizeHandle. This will enforce a ConnectionReconnectCommand
  else if (port instanceof draw2d.LineStartResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof draw2d.Connection && line.getSource() instanceof draw2d.InputPort)
      draw2d.Port.prototype.onDragEnter.call(this, line.getSource());
  }
  // User drag&drop a ResizeHandle. This will enforce a ConnectionReconnectCommand
  else if (port instanceof draw2d.LineEndResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof draw2d.Connection && line.getTarget() instanceof draw2d.InputPort)
       draw2d.Port.prototype.onDragEnter.call(this, line.getTarget());
  }
}

draw2d.InputPort.prototype.onDragLeave = function(/*:draw2d.Port*/ port)
{
  if(port instanceof draw2d.OutputPort)
  {
    draw2d.Port.prototype.onDragLeave.call(this, port);
  }
  // User drag&drop a ResizeHandle. This will enforce a ConnectionReconnectCommand
  else if (port instanceof draw2d.LineStartResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof draw2d.Connection && line.getSource() instanceof draw2d.InputPort)
       draw2d.Port.prototype.onDragLeave.call(this, line.getSource());
  }
  else if (port instanceof draw2d.LineEndResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof draw2d.Connection && line.getTarget() instanceof draw2d.InputPort)
       draw2d.Port.prototype.onDragLeave.call(this, line.getTarget());
  }
}


/**
 * Returns the Command to perform the specified Request or null.<br>
 * Inherited figures can override this method to return the own implementation
 * of the request.<br>
 *
 * @param {draw2d.EditPolicy} request describes the Command being requested
 * @return null or a draw2d.Command
 * @type draw2d.Command 
 * @since 0.9.15
 **/
draw2d.InputPort.prototype.createCommand=function(/*:draw2d.EditPolicy*/ request)
{
   // Connect request between two ports
   //
   if(request.getPolicy() ==draw2d.EditPolicy.CONNECT)
   {
     if(request.source.parentNode.id == request.target.parentNode.id)
        return null;

     if(request.source instanceof draw2d.OutputPort)
        // This is the different to the OutputPort implementation of createCommand
        return new draw2d.CommandConnect(request.canvas,request.source,request.target);

     return null;
   }

   // ...else call the base class
   return draw2d.Port.prototype.createCommand.call(this,request);
}
