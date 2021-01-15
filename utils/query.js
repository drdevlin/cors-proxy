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

module.exports = rebuildQuery;