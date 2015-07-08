'use strict';

var sdk = require('flowxo-sdk');

var service = new sdk.Service({
  serviceRoot: __dirname,
  name: 'SalesForce',
  slug: 'sales_force',
  auth: {
    type: 'oauth2',

    // Use the strategy for salesforce (force.com)
    // https://www.npmjs.com/package/passport-forcedotcom
    strategy: require('passport-forcedotcom').Strategy,

    // These options will be passed to the strategy when registering.
    // An OAuth 2.0 strategy requires `clientID` and `clientSecret`
    // to be passed. Fill in your ID and secret for this service in the
    // .env file and they will be populated at runtime below.
    // If your strategy requires any other options to be passed when registering,
    // add them below.
    options: {
      clientID: process.env.SALES_FORCE_ID,
      clientSecret: process.env.SALES_FORCE_SECRET,
      state: true,

      // Sales Force offers the following scopes (shown in parentheses):
      // Access your basic information (id, profile, email, address, phone)
      // Access and manage your data (api)
      // Provide access to your data via the Web (web)
      // Full access (full)
      // Access and manage your Chatter data (chatter_api)
      // Provide access to custom applications (visualforce)
      // Perform requests on your behalf at any time (refresh_token, offline_access)
      // Allow access to your unique identifier (openid)
      // Access custom permissions (custom_permissions)
      scope: ['full']
    }

    // params: {}
  }
});

/*
  Attach any service level methods to your service here, for example
    service.request = function(options){
      //...
    }

  then in your methods you'll be able to do
    this.request({id: 123});
*/

module.exports = service;
