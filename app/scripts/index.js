require([
  'backbone',
  'socketio',
  'app',
  'helpersHBS'
],

function (Backbone, io, App) {
  'use strict';

  var socket = io(); // jshint unused:false

  App.start();
  Backbone.history.start();
});
