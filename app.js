const https = require('https');

const express = require('express');
const app = express();

const rebuildQuery = require('./utils/query.js');

app.get('/', (req, res) => {
  const url = req.query.url;
  const queryString = rebuildQuery(req.query);
  if (url) {
    let data = '';
    https.get(url + queryString, response => {
      response.on('data', chunk => data += chunk);
      response.on('close', () => {
        res.set('Access-Control-Allow-Origin', process.env.WHITELIST);
        res.send(data);
      });
    });
  }
});

module.exports = app;