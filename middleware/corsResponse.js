const corsResponse = (req, res) => {
  res.set('Access-Control-Allow-Origin', process.env.WHITELIST);
  res.send(res.data);
}

module.exports = corsResponse;