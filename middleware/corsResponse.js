const corsResponse = (req, res) => {
  const origin = req.headers.origin;
  if (process.env.WHITELIST.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.send(res.data);
}

module.exports = corsResponse;