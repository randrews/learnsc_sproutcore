// ==========================================================================
// Model.Person
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Model.Person = SC.Record.extend(
/** @scope Model.Data.prototype */ {
  properties: ['firstName','lastName','salary','tasks'],
  tasksCollection: SC.Record.hasMany('Model.Task','person'),
  tasks:function(){
    return this.get('tasksCollection').get('records');
  }.property('tasksCollection'),

  prettyName:function(){
    if(this.get('newRecord')){
      return "New record";
    }
    return this.get('lastName')+", "+this.get('firstName');
  }.property('lastName','firstName','newRecord'),

  humanName:function(){
    if(this.get('newRecord')){
      return "New record";
    }
    return this.get('firstName')+" "+this.get('lastName');
  }.property('lastName','firstName','newRecord'),

  commit: function() {
    if(Model.localMode){
      return;
    }

    var self=this;

    sc_super();

    var props=$H(this.getPropertyData()).toJSON();
    var parameters = { person: props };

    if(this.get('newRecord')){
      var opts = {
	method:'post',
	parameters: parameters,
	  onSuccess: function(transport) {
            self.updateAttributes(transport.responseJSON);
	  }
      };

      new Ajax.Request("/people",opts);
    }else{
      var opts = {
	method:'put',
	emulateUncommonMethods: true,

	parameters: parameters,
	  onSuccess: function(transport) {
            self.updateAttributes(transport.responseJSON);
	  }
      };

      new Ajax.Request("/people/"+this.get('guid'),opts);
    }
  }
}) ;
