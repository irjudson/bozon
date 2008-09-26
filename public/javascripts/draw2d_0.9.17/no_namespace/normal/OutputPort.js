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
OutputPort=function(/*:Figure*/ uiRepresentation)
{
  Port.call(this, uiRepresentation);

  /** @private **/
  this.maxFanOut = 100; // the maximimum connections which goes out of this port
}

OutputPort.prototype = new Port;
/** @private **/
OutputPort.prototype.type="OutputPort";



/**
 *
 **/
OutputPort.prototype.onDragEnter = function(/*:Port*/ port)
{
  if(this.getMaxFanOut()<=this.getFanOut())
    return;

  if(port instanceof InputPort)
  {
    Port.prototype.onDragEnter.call(this, port);
  }
  // User drag&drop a ResizeHandle. This will enforce a ConnectionReconnectCommand
  else if (port instanceof LineStartResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof Connection && line.getSource() instanceof OutputPort)
      Port.prototype.onDragEnter.call(this, line.getSource());
  }
  // User drag&drop a ResizeHandle. This will enforce a ConnectionReconnectCommand
  else if (port instanceof LineEndResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof Connection && line.getTarget() instanceof OutputPort)
       Port.prototype.onDragEnter.call(this, line.getTarget());
  }
}

OutputPort.prototype.onDragLeave = function(/*:Port*/ port)
{
  if(port instanceof InputPort)
  {
    Port.prototype.onDragLeave.call(this, port);
  }
  // User drag&drop a ResizeHandle. This will enforce a ConnectionReconnectCommand
  else if (port instanceof LineStartResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof Connection && line.getSource() instanceof OutputPort)
       Port.prototype.onDragLeave.call(this, line.getSource());
  }
  else if (port instanceof LineEndResizeHandle)
  {
    var line = this.workflow.currentSelection;
    if(line instanceof Connection && line.getTarget() instanceof OutputPort)
       Port.prototype.onDragLeave.call(this, line.getTarget());
  }
}

/**
 * @private
 **/
OutputPort.prototype.onDragstart = function(/*:int*/ x, /*:int*/ y)
{
  if(this.maxFanOut==-1)
    return true;

  if(this.getMaxFanOut()<=this.getFanOut())
    return false;

  return true;
}



OutputPort.prototype.setMaxFanOut = function(/*:int*/ count)
{
  this.maxFanOut = count;
}

OutputPort.prototype.getMaxFanOut = function()
{
  return this.maxFanOut;
}

/**
 * @type int
 **/
OutputPort.prototype.getFanOut = function()
{
  if(this.getParent().workflow==null)
    return 0;

  var count =0;
  var lines = this.getParent().workflow.getLines();
  var size=lines.getSize();
  for(var i=0;i< size;i++)
  {
    var line = lines.get(i);
    if(line instanceof Connection)
    {
      if(line.getSource()==this)
        count++;
      else if(line.getTarget()==this)
        count++;
    }
  }
  return count;
}

/**
 * Returns the Command to perform the specified Request or null.<br>
 * Inherited figures can override this method to return the own implementation
 * of the request.<br>
 *
 * @param {EditPolicy} request describes the Command being requested
 * @return null or a Command
 * @type Command 
 * @since 0.9.15
 **/
OutputPort.prototype.createCommand=function(/*:EditPolicy*/ request)
{
   // Connect request between two ports
   //
   if(request.getPolicy() ==EditPolicy.CONNECT)
   {
     if(request.source.parentNode.id == request.target.parentNode.id)
        return null;

     if(request.source instanceof InputPort)
        // This is the different to the InputPort implementation of createCommand.
        return new CommandConnect(request.canvas,request.target,request.source);

     return null;
   }

   // ...else call the base class
   return Port.prototype.createCommand.call(this,request);
}
