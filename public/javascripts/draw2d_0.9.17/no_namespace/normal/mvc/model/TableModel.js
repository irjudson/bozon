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
 * @class The model for a DB table.

 * @version 0.9.17
 * @author Andreas Herz
 * @constructor
 */
TableModel=function()
{
   AbstractObjectModel.call(this);

   this.name   = "default";
   this.pos    = new Point(42,42);
   this.fields = new ArrayList();
   this.keys   = new ArrayList();
}

TableModel.EVENT_FIELD_ADDED      = "field added";
TableModel.EVENT_KEY_ADDED        = "key added";
TableModel.EVENT_NAME_CHANGED     = "name changed";
TableModel.EVENT_POSITION_CHANGED = "position changed";

TableModel.prototype = new AbstractObjectModel;
/** @private **/
TableModel.prototype.type="TableModel";

TableModel.prototype.setName=function(/*:String*/ name )
{
  var save = this.name;
  this.name = name;

  this.firePropertyChange(TableModel.EVENT_NAME_CHANGED,save, this.name);
}

TableModel.prototype.getName=function()
{
   return this.name;
}


TableModel.prototype.setPosition=function(/*:int*/ xPos , /*:int*/ yPos )
{
  var save = this.pos;
  if(save.x==xPos && save.y==yPos)
      return;

  this.pos = new Point(xPos,yPos);

  this.firePropertyChange(TableModel.EVENT_POSITION_CHANGED,save, this.pos);
}

/**
 * Return the x/y position of the table in the database graphical layout.
 *
 * @type Point
 **/
TableModel.prototype.getPosition=function()
{
   return this.pos;
}


/**
 * Return all foreign keys of the database table.
 *
 * @type ArrayList
 **/
TableModel.prototype.getForeignKeyModels=function()
{
  return this.keys;
}


/**
 * Add a foreign key to the database table
 *
 * @param {ForeignKeyModel}
 **/
TableModel.prototype.addForeignKeyModel=function(/*:ForeignKeyModel*/ key)
{
  if(!(key instanceof ForeignKeyModel))
    throw "Invalid parameter type in [TableModel.prototype.addForeignKeyModel]";

  if(this.keys.indexOf(key)==-1)
  {
    this.keys.add(key);
    key.setModelParent(this);
    // inform all listener, mainly the visual representation, about the changes.
    this.firePropertyChange(TableModel.EVENT_KEY_ADDED,null,key);
  }
}


/**
 * Return all fields or columns of the database table.
 *
 * @type ArrayList
 **/
TableModel.prototype.getFieldModels=function()
{
  return this.fields;
}

/**
 * Add a field or column to the database table.
 *
 *
 **/
TableModel.prototype.addFieldModel=function(/*:FieldModel*/ field)
{
  if(!(field instanceof FieldModel))
    throw "Invalid parameter type in [TableModel.prototype.addFieldModel]";

  if(this.fields.indexOf(field)==-1)
  {
    this.fields.add(field);
    field.setModelParent(this);
    // inform all listener, mainly the visual representation, about the changes.
    this.firePropertyChange(TableModel.EVENT_FIELD_ADDED,null, field);
  }
}

/**
 * Returns the related database model.
 *
 * @type DatabaseModel
 **/
TableModel.prototype.getDatabaseModel=function()
{
   return this.getModelParent().getDatabaseModel();
}

/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 * @since 0.9.15
 **/
TableModel.prototype.getPersistentAttributes=function()
{
   var att = AbstractObjectModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   att.name= this.name;
   att.pos= this.pos;
   att.fields = this.fields;

   return att;
}
