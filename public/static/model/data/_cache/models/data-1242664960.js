/* Start ----------------------------------------------------- models/data.js*/

// ==========================================================================
// Model.Data
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Model.Data = SC.Record.extend(
/** @scope Model.Data.prototype */ {
  prettyName:function(){
    return this.get('lastName')+", "+this.get('firstName');
  }.property()
}) ;


/* End ------------------------------------------------------- models/data.js*/

