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
  }.property(),

  humanName:function(){
    return this.get('firstName')+" "+this.get('lastName');
  }.property()
}) ;
