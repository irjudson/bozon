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
draw2d.shape.uml.InheritancePort=function()
{
  draw2d.Port.call(this, new draw2d.Rectangle());
  this.setBackgroundColor(new draw2d.Color(255,255,190));
}

draw2d.shape.uml.InheritancePort.prototype = new draw2d.Port;
/** @private **/
draw2d.shape.uml.InheritancePort.prototype.type="shape.uml.InheritancePort";

/**
 * @private
 * @param {draw2d.Port} port The port on which this port has been droped
 **/
draw2d.shape.uml.InheritancePort.prototype.onDrop = function(/*:draw2d.Port*/ port)
{
  if(this.parentNode.id == port.parentNode.id)
  {
    // same parentNode -> do nothing
  }
  else
  {
    var command = new draw2d.CommandConnect(this.parentNode.workflow,this,port);
    command.setConnection(new draw2d.shape.uml.InheritanceConnection());
    this.parentNode.workflow.getCommandStack().execute(command);
  }
}
