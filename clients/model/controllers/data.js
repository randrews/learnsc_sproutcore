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
Model.dataController = SC.CollectionController.create(
/** @scope Model.dataController */ {
  listSelection:null,

  selectedPerson:function(){
    var sel=this.get('listSelection');
    if(sel==null){
      return "";
    }else if(sel.length==0){
      return "";
    }else{
      return sel[0].get('humanName');
    }
  }.property('listSelection')
}) ;
