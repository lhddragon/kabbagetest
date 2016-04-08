'use strict';

/**
 * All the endpoints for anything related to vehicle
 *
 * @type {exports}
 */

var startupController = require('./proxy-ctrl');
var config = require('../../config/environment');


module.exports = [
  {
    method: 'POST',
    path: '/v2/prequalify',
    handler: {
      proxy: {
      		host:'api.kabbage.com',
      		port:443,
      		protocol: 'https',
      		passThrough: true,
			    localStatePassThrough: true,
			    xforward: true
      }
    }
  }
];
