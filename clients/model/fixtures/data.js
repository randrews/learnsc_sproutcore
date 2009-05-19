// ==========================================================================
// Model.Person Fixtures
// ==========================================================================

require('core') ;

Model.FIXTURES = Model.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  { guid: 1,
    type: 'Person',
    firstName: "Michael",
    lastName: "Scott"
  },

  { guid: 2,
    type: 'Person',
    firstName: "Dwight",
    lastName: "Schrute"
  },

  { guid: 3,
    type: 'Person',
    firstName: "Jim",
    lastName: "Halpert"
  },

  { guid: 4,
    type: 'Person',
    firstName: "Pam",
    lastName: "Beesly"
  },

  { guid: 5,
    type: 'Person',
    firstName: "Ryan",
    lastName: "Howard"
  }

]);
