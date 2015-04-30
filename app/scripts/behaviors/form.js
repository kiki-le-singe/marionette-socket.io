define([
  'marionette',
  'backbone.syphon',
  'behaviors/preventAction'
],

function (Marionette, Syphon, PreventAction) {
  'use strict';

  return Marionette.Behavior.extend({
    events: {
      submit: 'submit'
    },

    behaviors: {
      PreventAction: {
        behaviorClass: PreventAction
      }
    },

    initialize: function () {
      this.model = this.view.options.model || null;
    },

    onDomRefresh: function () {},

    onDestroy: function () {},

    submit: function () {
      // https://github.com/marionettejs/backbone.syphon#basic-usage--serialize
      var data = Syphon.serialize(this.view);
      // debugger
      // this.model.set(data);
    }
  });
});
