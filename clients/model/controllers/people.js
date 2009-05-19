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

  selectionHumanName:function(){
    return this.withSel('humanName');
  }.property('selection'),

  selectionSalary:function(){
    return this.withSel('salary');
  }.property('selection'),

  withSel:function(prop){
    var sel=this.get('selection');
    if(sel==null){
      return "";
    }else{
      return sel.get(prop);
    }
  }
}) ;
