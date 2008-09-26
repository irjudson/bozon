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
 * @class A CompartmentFigure is the base class for figures which can have children.<br>
 * You can drag and drop any figure to a CompartmentFigure. At this moment the drag &amp; drop figure
 * is a child of the CompartmentFigure.<br>
 * The CompartmentFigure is a container for other figures. It's a kind of grouping elements.
 *
 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 */
CompartmentFigure=function()
{
  Node.call(this);

  /** @private **/
  this.children = new ArrayList();

  this.setBorder(new LineBorder(1));


  /** @private **/
  this.dropable = new DropTarget(this.html);
  this.dropable.node = this;

  this.dropable.addEventListener("figureenter", function (oEvent)
  {
    oEvent.target.node.onFigureEnter(oEvent.relatedTarget.node);
  });
  this.dropable.addEventListener("figureleave", function (oEvent)
  {
    oEvent.target.node.onFigureLeave(oEvent.relatedTarget.node);
  });
  this.dropable.addEventListener("figuredrop", function (oEvent)
  {
    oEvent.target.node.onFigureDrop(oEvent.relatedTarget.node);
  });
}

CompartmentFigure.prototype = new Node;
  /** @private **/
CompartmentFigure.prototype.type="CompartmentFigure";


/**
 * Sub class can override this method to reset the highlight or do other stuff.<br>
 * <br>
 * Don't forget to call the super method via <code>Figure.prototype.onFigureEnter.call(this,figure)</code> if you inherit
 *
 * @param {Figure} figure The current drag drop figure.
 **/
CompartmentFigure.prototype.onFigureEnter = function(/*:Figure*/ figure)
{
}

/**
 * Sub class can override this method to reset the highlight or do other stuff.<br>
 * <br>
 * Don't forget to call the super method via <code>Figure.prototype.onFigureLeave.call(this,figure)</code> if you inherit
 * 
 * @param {Figure} figure The current drag drop figure.
 * @private
 **/
CompartmentFigure.prototype.onFigureLeave = function(/*:Figure*/ figure)
{
}


/**
 * Sub class can override this method to reset the highlight or do other stuff.<br>
 * <br>
 *
 * @param {Figure} figure The current drag drop figure.
 **/
CompartmentFigure.prototype.onFigureDrop = function(/*:Figure*/ figure)
{
}


/**
 * Returns the children of this container figure.
 *
 * @return ArrayList
 **/
CompartmentFigure.prototype.getChildren=function()
{
   return this.children;
}

/**
 * Add the hands over element to this compartment figure. This is a kind of grouping elements
 * 
 * @param {Figure} figure The new figure to add.
 **/
CompartmentFigure.prototype.addChild = function(/*:Figure*/ figure)
{
  // The child of a compartment is always above the compartment
  //
  figure.setZOrder(this.getZOrder()+1);
  figure.setParent(this);

  // Add the element to the child array
  //
  this.children.add(figure);
}

/**
 * Remove the hands over figure from this compartment figure.
 * This method does NOT remove the figure from the cnavas. It only remove the figure in
 * child hirachie of this compartment.
 *
 * @param {Figure} figure The figure to remove.
 **/
CompartmentFigure.prototype.removeChild = function(/*:Figure*/ figure)
{
  figure.setParent(null);
  this.children.remove(figure);
}


/**
 * @param {int} index Set the new z-index of the element
 **/
CompartmentFigure.prototype.setZOrder=function(/*:int*/ index)
{
  Node.prototype.setZOrder.call(this,index);

  // The child of a compartment must be always above the compartment.
  //
  for(var i=0; i<this.children.getSize();i++)
  {
    this.children.get(i).setZOrder(index+1);
  }
}

/**
 * Set the new position of the object
 *
 * @param {int} xPos The new x coordinate of the figure
 * @param {int} yPos The new y coordinate of the figure 
 **/
CompartmentFigure.prototype.setPosition=function(/*:int*/ xPos , /*:int*/yPos )
{
  var oldX = this.getX();
  var oldY = this.getY();
  Node.prototype.setPosition.call(this, xPos, yPos);

  // Adjust all children figures. The children has an absolute position to the upper left corner
  // of the paint area and not to the compartment. :-(
  // TODO:check another solution e.g. relative position of children
  //
  for(var i=0; i<this.children.getSize();i++)
  {
    var child = this.children.get(i);
    child.setPosition(child.getX()+this.getX()-oldX, child.getY()+this.getY()-oldY);
  }
}

/**
 * @private
 **/
CompartmentFigure.prototype.onDrag = function()
{
  var oldX = this.getX();
  var oldY = this.getY();
  Node.prototype.onDrag.call(this);

  // Adjust all children figures. The children has an absolute position to the upper left corner
  // of the paint area and not to the compartment. :-(
  // TODO:check another solution e.g. relative position of children
  //
  for(var i=0; i<this.children.getSize();i++)
  {
     var child = this.children.get(i);
     child.setPosition(child.getX()+this.getX()-oldX, child.getY()+this.getY()-oldY);
  }
}



