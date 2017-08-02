/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var express = require('express');
var serveIndex = require('serve-index')
// var basicAuth = require('./basic-auth')
module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/movies', require('./api/movies')(app));
  //app.use('/api/random/fast', basicAuth );
  app.use('/api/random', require('./api/random'));

  var priv = require('./api/random');
  //priv.use(basicAuth);
  app.use('/api/random/private', priv );


  // Serve demo directory

  // All undefined asset or api routes should return a 404
  app.route('/:url(api)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(errors[404]);
};
