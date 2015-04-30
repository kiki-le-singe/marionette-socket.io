define([
  'marionette',
  '#chat/controllers/nav',
  '#chat/routers/routers',
  'vent'
],

function (Marionette, NavController, Routers, vent) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      this.routers = new Routers({
        controller: new NavController(options)
      });

      console.log('initialize: chatIndexObject');
      vent.trigger('module:chat:bootstrapped');
    }
  });
});
