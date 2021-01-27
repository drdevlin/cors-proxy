const rebuildQuery = (req, res, next) => {
  const queryObjectEntries = Object.entries(req.query).filter(entry => entry[0] !== 'url');
  let queryString = '?';
  let ranOnce = false;
  for (const [key, value] of queryObjectEntries) {
    if (ranOnce) queryString += '&';
    if (key !== 'url') queryString += `${key}=${value}`;
    ranOnce = true;
  }
  res.queryString = encodeURI(queryString);
  next();
}

module.exports = rebuildQuery;