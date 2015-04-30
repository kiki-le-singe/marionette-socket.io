define([
  'marionette',
  '#chat/views/chat'
],

function (Marionette, ChatView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    chat: function () {
      return this.contentRegion.show(new ChatView());
    }
  });
});
