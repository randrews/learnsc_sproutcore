// ==========================================================================
// Model.PeopleController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Model.peopleController = SC.ArrayController.create(
/** @scope Model.peopleController */ {
  allowsMultipleSelection:false,
  canEditCollection: true
}) ;
