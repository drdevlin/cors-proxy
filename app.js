const express = require('express');
const app = express();

const rebuildQuery = require('./middleware/rebuildQuery.js'); 
const callAPI = require('./middleware/callAPI.js');
const corsResponse = require('./middleware/corsResponse.js');

app.get('/', rebuildQuery, callAPI, corsResponse);

module.exports = app;