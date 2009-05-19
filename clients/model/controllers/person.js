// ==========================================================================
// Model.PersonController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.ObjectController
  @author AuthorName
  @version 0.1
  @static
*/
Model.personController = SC.ObjectController.create(
/** @scope Model.personController */ {
  contentBinding: 'Model.peopleController.selection',
  humanName:function(){
    try{
      var hn=this.get('content').get('humanName');
      return (hn!="" ? hn : "Select a person");
    }catch(e){
      return "Select a person";
    }
  }.property('content'),

  commitChangesImmediately: false,

  commitRecord: function() {
    this.commitChanges();
    var content = this.get('content');
    if (content && content.get('length') == 1) {
      content.objectAt(0).commit();
    }
  }
}) ;
