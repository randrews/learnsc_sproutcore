// ==========================================================================
// Model
// ==========================================================================

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
function main() {

  if (Model.localMode) {
    Model.server.preload(Model.FIXTURES);
    var coll=Model.Person.findAll();
    Model.peopleController.set('content',coll);
  } else {
    Model.fetchPeople();
    Model.fetchTasks();
  }

  SC.page.awake();
} ;
