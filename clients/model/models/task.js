// ==========================================================================
// Model.Task
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Model.Task = SC.Record.extend(
/** @scope Model.Task.prototype */ {

  properties: ['name'],
  personType:'Model.Person'
}) ;
