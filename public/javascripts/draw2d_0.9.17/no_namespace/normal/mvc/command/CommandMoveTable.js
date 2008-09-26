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
CommandMoveTable=function(/*:TableModel*/ model)
{
   Command.call(this,"move model");
   this.model = model;
   this.oldX  = model.getPosition().getX();
   this.oldY  = model.getPosition().getY();
}

CommandMoveTable.prototype = new Command;
/** @private **/
CommandMoveTable.prototype.type="CommandMoveTable";


/**
 * Execute the command the first time
 * 
 **/
CommandMoveTable.prototype.setPosition=function(/*:int*/ x, /*:int*/ y)
{
   this.newX = x;
   this.newY = y;
}

/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
CommandMoveTable.prototype.canExecute=function()
{
  // return false if we doesn't modify the model => NOP Command
  return this.newX!=this.oldX || this.newY!=this.oldY;
}

/**
 * Execute the command the first time
 * 
 **/
CommandMoveTable.prototype.execute=function()
{
   this.redo();
}

/**
 * Undo the command
 *
 **/
CommandMoveTable.prototype.undo=function()
{
   this.model.setPosition(this.oldX, this.oldY);
}

/** Redo the command after the user has undo this command
 *
 **/
CommandMoveTable.prototype.redo=function()
{
   this.model.setPosition(this.newX, this.newY);
}
