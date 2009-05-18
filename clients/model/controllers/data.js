// ==========================================================================
// Model.DataController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Model.dataController = SC.ArrayController.create(
/** @scope Model.dataController */ {
  allowsMultipleSelection:false,

  selectionHumanName:function(){
    var sel=this.get('selection');
    if(sel==null){
      return "";
    }else{
      return sel.get('humanName');
    }
  }.property('selection')
}) ;
