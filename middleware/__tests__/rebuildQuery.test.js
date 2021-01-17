const rebuildQuery = require('../rebuildQuery.js');

describe('rebuildQuery middleware', () => {
  it('returns a viable query string without the url param', () => {
    const testQuery = {
      url: 'someurl',
      firstparam: 'value1',
      secondparam: 'value2'
    }

    const req = { query: testQuery };
    const res = {};
    const next = () => {};

    rebuildQuery(req, res, next);
    expect(res.queryString).toStrictEqual('?firstparam=value1&secondparam=value2');
  });
});