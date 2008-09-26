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
 * @class OneToMany relation between 2 database tables
 * fromTabel <--- toTable
 **/
ForeignKeyModel=function( /*:String*/ toTable, /*:String*/ toField, /*:String*/ fromTable, /*:String*/ fromField)
{
   AbstractConnectionModel.call(this);

  // ONE side
  this.fromTable = fromTable;
  this.fromField = fromField;

  // MANY side
  this.toTable = toTable;
  this.toField = toField;
}

ForeignKeyModel.prototype = new AbstractConnectionModel;
/** @private */
ForeignKeyModel.prototype.type="ForeignKeyModel";


/**
 *
 **/
ForeignKeyModel.prototype.getSourceModel=function()
{
   return this.getDatabaseModel().getTableModel(this.toTable);
}

/**
 *
 **/
ForeignKeyModel.prototype.getTargetModel=function()
{
   return this.getDatabaseModel().getTableModel(this.fromTable);
}



/**
 *
 **/
ForeignKeyModel.prototype.getSourcePortName=function()
{
   return "out_"+this.toField;
}

/**
 *
 **/
ForeignKeyModel.prototype.getTargetPortName=function()
{
   return "in_"+this.fromField;
}

/**
 * @type DatabaseModel
 **/
ForeignKeyModel.prototype.getDatabaseModel=function()
{
   return this.getModelParent().getDatabaseModel();
}


/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 **/
ForeignKeyModel.prototype.getPersistentAttributes=function()
{
   var att = AbstractObjectModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   att.fromTable= this.fromTable;
   att.fromField= this.fromField;
   att.toTable  = this.toTable;
   att.toField  = this.toField;

   return att;
}

