const https = require('https');

const callAPI = (req, res, next) => {
  if (req.query.url) {
    const url = req.query.url;
    const queryString = res.queryString;
    let data = '';
    https.get(url + queryString, response => {
      response.on('data', chunk => data += chunk);
      response.on('close', () => {
        res.data = data;
        next();
      });
    });
  } else {
    next();
  }
}

module.exports = callAPI;