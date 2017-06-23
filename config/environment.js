/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'e-security',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
<<<<<<< HEAD
    firebase: {
      apiKey: "AIzaSyDntrbpjeekfzP3gBIGIqFNStMph3SO5so",
        authDomain: "e-security-49cb6.firebaseapp.com",
        databaseURL: "https://e-security-49cb6.firebaseio.com",
        projectId: "e-security-49cb6",
        storageBucket: "",
      },
=======

  firebase: {
    apiKey: "AIzaSyDntrbpjeekfzP3gBIGIqFNStMph3SO5so",
     authDomain: "e-security-49cb6.firebaseapp.com",
     databaseURL: "https://e-security-49cb6.firebaseio.com",
     projectId: "e-security-49cb6",
     storageBucket: "",
   },
>>>>>>> dc39de4a64896411e8930d62a5f1caf57c60455a

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
