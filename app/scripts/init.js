require.config({

  baseUrl: '/scripts',

  /* starting point for application */
  deps: ['index'],

  shim: {
    socketio: {
      exports: 'io'
    },
    backbone: {
      deps: ['underscore', 'jquery']
    },
    marionette: {
      deps: ['backbone']
    }
  },

  paths: {
    // modules
    '#chat': 'modules/chat',
    '#hello': 'modules/hello',

    socketio: 'http://localhost:3000/socket.io/socket.io', // make the variable 'host' dynamic
    // socketio: '/socket.io/socket.io',

    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/lodash',
    backbone: '../bower_components/backbone/backbone',

    /* alias all marionette libs */
    marionette: '../bower_components/marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.syphon': '../bower_components/marionette.backbone.syphon/lib/backbone.syphon',

    /* Alias text.js for template loading and shortcut the templates dir to tmpl */
    text: '../bower_components/requirejs-text/text',

    /* Helpers */
    helpersHBS: 'helpers/helpers',

    /* requirejs-plugins */
    json: '../bower_components/requirejs-plugins/src/json',

    handlebars: '../bower_components/handlebars/handlebars.runtime'
  }
});
