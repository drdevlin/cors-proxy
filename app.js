const https = require('https');

const express = require('express');
const app = express();

function rebuildQuery(queryObject) {
  const queryObjectEntries = Object.entries(queryObject).filter(entry => entry[0] !== 'url');
  let queryString = '?';
  let ranOnce = false;
  for (const [key, value] of queryObjectEntries) {
    if (ranOnce) queryString += '&';
    if (key !== 'url') queryString += `${key}=${value}`;
    ranOnce = true;
  }
  return queryString;
}

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

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
