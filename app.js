const https = require('https');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const url = req.query.url;
  if (url) {
    let data = '';
    https.get(url, response => {
      response.on('data', chunk => data += chunk);
      response.on('close', () => res.send(data));
    })
  }
});

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
