define([
  '#chat/index',
  '#hello/index'
],

function (Chat, Hello) {
  'use strict';

  return function (options) {
    options = options || {};

    var modules = [
      new Chat(options),
      new Hello(options)
    ];

    return modules;
  };
});
