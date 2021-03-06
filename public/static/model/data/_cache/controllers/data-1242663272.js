/* Start ----------------------------------------------------- controllers/data.js*/

// ==========================================================================
// Model.DataController
// ==========================================================================

require('core');
require('models/data');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Model.dataController = SC.CollectionController.create(
/** @scope Model.dataController */ {

  content: SC.Collection.create({ recordType: Model.Data })
}) ;


/* End ------------------------------------------------------- controllers/data.js*/

