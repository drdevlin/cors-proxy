const https = require('https');

const express = require('express');
const app = express();

const rebuildQuery = require('./middleware/rebuildQuery.js'); 

app.get('/', rebuildQuery, (req, res) => {
  const url = req.query.url;
  const queryString = res.queryString;
  if (url) {
    let data = '';
    https.get(url + queryString, response => {
      response.on('data', chunk => data += chunk);
    });
    res.set('Access-Control-Allow-Origin', process.env.WHITELIST);
    res.send(data);
  }
});

module.exports = app;