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
CommandDelete=function(/*:Figure*/ figure)
{
   Command.call(this,"delete figure");
   this.parent   = figure.parent; // CompartmentFigure
   this.figure   = figure;
   /** @private */
   this.workflow = figure.workflow;
   /** @private */
   this.connections = null;
   /** @private */
   this.compartmentDeleteCommands = null; 
}

CommandDelete.prototype = new Command;
/** @private **/
CommandDelete.prototype.type="CommandDelete";

/**
 * Execute the command the first time
 * 
 **/
CommandDelete.prototype.execute=function()
{
   this.redo();
}

/**
 * Undo the command
 *
 **/
CommandDelete.prototype.undo=function()
{
    if(this.figure instanceof CompartmentFigure)
    {
       for(var i=0; i<this.compartmentDeleteCommands.getSize();i++)
       {
         var deleteCommand = this.compartmentDeleteCommands.get(i);
         // add the figure to the compartment figure
         this.figure.addChild(deleteCommand.figure);
         // add the figure to the workflow
         this.workflow.getCommandStack().undo();
       }
    }
    this.workflow.addFigure(this.figure);
    if(this.figure instanceof Connection)
       this.figure.reconnect();

    this.workflow.setCurrentSelection(this.figure);
    if(this.parent!=null)
      this.parent.addChild(this.figure);
    for (var i = 0; i < this.connections.getSize(); ++i)
    {
       this.workflow.addFigure(this.connections.get(i));
       this.connections.get(i).reconnect();
    }
}

/** Redo the command after the user has undo this command
 *
 **/
CommandDelete.prototype.redo=function()
{
    // We must delete all children if this figure if this element an 
    // compartment figure.
    //
    if(this.figure instanceof CompartmentFigure)
    {
      if(this.compartmentDeleteCommands==null)
      {
         this.compartmentDeleteCommands = new ArrayList();
         var children = this.figure.getChildren().clone();
         for(var i=0; i<children.getSize();i++)
         {
           var child = children.get(i);
           this.figure.removeChild(child);
           var deleteCommand = new CommandDelete(child);
           this.compartmentDeleteCommands.add(deleteCommand);
           this.workflow.getCommandStack().execute(deleteCommand);
         }
      }
      else
      {
         for(var i=0; i<this.compartmentDeleteCommands.getSize();i++)
         {
            this.workflow.redo();
         }
      }
    }

    this.workflow.removeFigure(this.figure);
    this.workflow.setCurrentSelection(null);
    if(this.figure instanceof Node && this.connections==null)
    {
      this.connections = new ArrayList();
      var ports = this.figure.getPorts();
      for(var i=0; i<ports.getSize(); i++)
      {
        if(ports.get(i).getConnections)
          this.connections.addAll(ports.get(i).getConnections());
      }
    }

   if(this.connections == null)
      this.connections = new ArrayList();

    // remove this figure from the parent CompartmentFigure
    //
    if(this.parent!=null)
      this.parent.removeChild(this.figure);

   for (var i = 0; i < this.connections.getSize(); ++i)
   {
      this.workflow.removeFigure(this.connections.get(i));
   }
}
