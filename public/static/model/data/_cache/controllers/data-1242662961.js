/* Start ----------------------------------------------------- controllers/data.js*/

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

  allData:function(){
    return Model.Data({});
  }
}) ;


/* End ------------------------------------------------------- controllers/data.js*/

