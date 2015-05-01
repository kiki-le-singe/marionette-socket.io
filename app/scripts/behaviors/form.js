define([
  'marionette',
  'backbone.syphon',
  'behaviors/preventAction',
  'socket'
],

function (Marionette, Syphon, PreventAction, socket) {
  'use strict';

  return Marionette.Behavior.extend({
    ui: {
      input: 'input',
      messages: '.messages'
    },

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

      var self = this;
      socket.on('dispatchmessage', function (msg) {
        self.ui.messages.append($('<p>').text(msg)); // @TODO: replace $('<p>') by a template or a view
      });
    },

    onDomRefresh: function () {},

    onDestroy: function () {},

    submit: function () {
      // https://github.com/marionettejs/backbone.syphon#basic-usage--serialize
      var data = Syphon.serialize(this.view);

      socket.emit('sendmessage', data);
      this.ui.input.val('');

      // this.model.set(data);
    }
  });
});
