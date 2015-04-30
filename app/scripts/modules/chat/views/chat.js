define([
  'marionette',
  'behaviors/index',
  'templates'
],

function (Marionette, behaviors, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['chat/chat'],
    className: 'container text-center chat',

    behaviors: {
      Form: {
        behaviorClass: behaviors.form,
      }
    },

    initialize: function () {
      console.log('initialize: chatView');
    }
  });
});
