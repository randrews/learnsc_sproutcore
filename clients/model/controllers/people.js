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
  canEditCollection: true,

  addObject: function() {
    var newObj = Model.Person.newRecord();
    this.pushObject(newObj);
    this.set('selection',[newObj]);
  }
}) ;
