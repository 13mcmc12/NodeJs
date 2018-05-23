"use_strict"
var request = require("request");
var async = require('async');
var createOptions = require('./createOPtions.js');
var createRequest = require('./createRequest.js');
var createResponse = require('./createResponse.js');
var createIntegrtation = require('./createIntegrationFlow.js');
var createImports = require('./createImports.js');
var createExports = require('./createExports.js');
var createMockableConnection = require('./createMockableConnections.js');
var createNetSuiteConnection = require('./createNetSuiteConnections.js');
var createFlow = require('./createFlows.js');

var data = {};

function cb(name) {
  console.log('sanjay sharma')
}
var test = [createNetSuiteConnection, createMockableConnection]

async.series([
      async.parallel([createNetSuiteConnection('SOME NAME ', cb), createMockableConnection('some name', cb), createIntegrtation('some Name', cb)], function(err) {
          if (err) {
            //Handle the error in some way. Here we simply throw it
            //Other options: pass it on to an outer callback, log it etc.
            throw err;
          }
        }),
        async.parallel([createExports('SOME NAME ', cb), createImports('some name', cb)], function(err) {
            if (err) {
              //Handle the error in some way. Here we simply throw it
              //Other options: pass it on to an outer callback, log it etc.
              throw err;
            }
            }),
          async.parallel([createFlow('some name', cb)], function(err) {
              if (err) {
                //Handle the error in some way. Here we simply throw it
                //Other options: pass it on to an outer callback, log it etc.
                throw err;
              }
              }),

          ]);
