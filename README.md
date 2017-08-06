# Marionette Boilerplate

[![Build Status](https://travis-ci.org/kiki-le-singe/marionette-boilerplate.svg?branch=master)](https://travis-ci.org/kiki-le-singe/marionette-boilerplate)

## Introduction

> This project is first to train with tools like [GruntJS](http://gruntjs.com/), [Yeoman](http://yeoman.io/), [Backbone.js](http://backbonejs.org/), [Marionette.js](http://marionettejs.com/)... And then I used it as Boilerplate.

## Requirements

 * [nodejs](http://nodejs.org/)
 * [GruntJS](http://gruntjs.com/) or [Gulp](http://gulpjs.com/)
 * [bower](http://bower.io/)
 * [sass](http://sass-lang.com/)

## Optional

 * [Mongodb](http://www.mongodb.org/)
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 * [Yeoman](http://yeoman.io/): **required by [generator-marionette](https://github.com/mrichard/generator-marionette)**
 * [generator-marionette](https://github.com/mrichard/generator-marionette): Allows the use of **yo** command to generate **routers**, **models**, **views** ...

## Installation

* `$ git clone git@github.com:kiki-le-singe/marionette-boilerplate.git`
* `$ cd marionette-boilerplate`
* `$ npm install`
* `$ bower install`

## Grunt tasks

* `$ grunt serve`

Then serve the app on `localhost:9000` and opens your default browser

* `$ grunt serve --stub`

Makes the same thing that the above command, except that the 'stub' option allows to enabled or not the retrieving of fake datas.

* `$ grunt test`

Runs tests located in `/tests/js/spec`.

> You can access tests in your browser, simply create a vhost.

* `$ grunt dist`

Build the application in `/dist`.

* `$ grunt build`

Create a .tgz archive named `marionette-boilerplate-[version]`.

* `$ grunt docs`

Generates a html doc of your documented code in `/docs` and open it in your browser.

* `$ grunt plato`

Generate complexity analysis reports in `/reports` with [plato](https://github.com/es-analysis/plato).

* `$ grunt changelog`

Generate a markdown changelog from git commit data.
[grunt-conventional-changelog](https://www.npmjs.com/package/grunt-conventional-changelog).

## Gulp tasks

* `$ gulp serve`

Then serve the app on `localhost:3000` and opens your default browser

* `$ gulp serve --stub`

Makes the same thing that the above command, except that the 'stub' option allows to enabled or not the retrieving of fake datas.

* `$ gulp test`

Coming soon...

* `$ gulp dist`

Build the application in `/dist`.

* `$ gulp build`

Create a .zip archive named `marionette-boilerplate-[version]`.

* `$ gulp docs`

Coming soon...

* `$ gulp plato`

Coming soon...

* `$ gulp changelog`

Coming soon...

## Included JavaScript libraries

 > Why to use Backbone.wreqr and Backbone.radio? Marionette require Backbone.wreqr for internal use only and I use Backbone.radio instead of Backbone.wreqr in my boilerplate but it's not mandatory.

 * [Backbone.js](http://backbonejs.org/)
 * [Marionette.js](http://marionettejs.com/)
 * [Backbone.babysitter](https://github.com/marionettejs/backbone.babysitter)
 * [Backbone.wreqr](https://github.com/marionettejs/backbone.wreqr)
 * [Backbone.radio](https://github.com/marionettejs/backbone.radio)
 * [Require.js](http://requirejs.org/)
 * [jQuery 2](http://jquery.com/)
 * [Lo-Dash V3](http://lodash.com/)
 * [Handlebars](http://handlebarsjs.com/)
 * [Modernizr](http://modernizr.com/)

## API

By default the root access for the API is http://localhost:9000/api. Available example: http://localhost:9000/api/libraries

## Tests

The library used for tests are :

 * [mocha](http://mochajs.org/)
 * [sinon](http://sinonjs.org/)
 * [chai](http://chaijs.com/)

## App configuration

The configuration of the application is located in `/app/config`

## Handlebars helpers

Handlebars helpers is located in `/app/scripts/helpers`

## Sources

 * [Yeoman](http://yeoman.io/)
 * [generator-marionette](https://github.com/mrichard/generator-marionette): **Marionette Boilerplate** is based on it

## Tips and tricks

 * [mongo-express](https://www.npmjs.org/package/mongo-express): If you use MongoDB, look at this node modules. It's an convenient admin interface for MongoDB.
 * To enjoy livereload don't forget download the chrome plugin. (useless only for the use of Grunt. browsersync coming soon)
