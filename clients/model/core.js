// ==========================================================================
// Model
// ==========================================================================

Model = SC.Object.create({

  // This will create the server for your application.  Add any namespaces
  // your model objects are defined in to the prefix array.
  server: SC.Server.create({ prefix: ['Model'] }),

  // When you are in development mode, this array will be populated with
  // any fixtures you create for testing and loaded automatically in your
  // main method.  When in production, this will be an empty array.
  FIXTURES: [],

  localMode: (window.location.hash === '#development'),

  fetchPeople: function(successFunction) {
    var opts = {
      method:'get',
      onSuccess: function(transport) {
	Model.parseFetchResponse(transport);
	var coll=Model.Person.findAll();
	Model.peopleController.set('content',coll);

	if (successFunction) {
	  successFunction();
	}
      },

      onFailure: function(transport) {
	console.warn("Recipe fetching failed due to: '%@'".fmt(transport.statusText));
      }
    };

    new Ajax.Request('/people',opts);
  },


  parseFetchResponse: function(transport) {
    var response = transport.responseJSON;
    var records = response.records;

    var idx = records.length;
    var record;

    while (idx--) {
      record = Model.Person.newRecord(records[idx]);
      record.set('newRecord',false);
    }
  }
}) ;
