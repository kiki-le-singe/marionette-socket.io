define([
  'marionette'
],

function (Marionette) {
  // https://github.com/FlorentD/mbb-ladder/blob/master/public/js/views/header/behavior/PreventClick.js
  'use strict';

  return Marionette.Behavior.extend({
    ui: {
      link: 'a'
    },

    events: {
      submit: 'preventAction',
      'click @ui.link': 'preventAction'
    },

    preventAction: function (event) {
      event.stopPropagation();
      event.preventDefault();
    }
  });
});
