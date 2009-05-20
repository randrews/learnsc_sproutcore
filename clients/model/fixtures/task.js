// ==========================================================================
// Model.Task Fixtures
// ==========================================================================

require('core') ;

Model.FIXTURES = Model.FIXTURES.concat([
  { guid: 1,
    type: 'Task',
    name: "Fix stuff",
    person: 1
  },

  { guid: 2,
    type: 'Task',
    name: "Fix other stuff",
    person: 1
  },

  { guid: 3,
    type: 'Task',
    name: "Order pizza",
    person: 2
  }
]);
