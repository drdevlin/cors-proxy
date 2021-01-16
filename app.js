const express = require('express');
const app = express();

const rebuildQuery = require('./middleware/rebuildQuery.js'); 
const callAPI = require('./middleware/callAPI.js');

app.get('/', rebuildQuery, callAPI, (req, res) => {
  res.set('Access-Control-Allow-Origin', process.env.WHITELIST);
  res.send(res.data);
});

module.exports = app;