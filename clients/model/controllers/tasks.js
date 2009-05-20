// ==========================================================================
// Model.TasksController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Model.tasksController = SC.ArrayController.create(
/** @scope Model.tasksController */ {
  allowsMultipleSelection:false,
  canEditCollection: true,

  contentBinding:"Model.personController.content",

  content: function(){
    try{
      var person=Model.personController.get('content')[0];
      return person.get('tasks');
    }catch(e){
      return [];
    }
  }.property()

}) ;
