const callAPI = require('../callAPI.js');

const https = require('https');
jest.mock('https');
https.get.mockImplementation((string1, callback1) => {
  const mockListener = {
    on: (string2, callback2) => {
      if (string2 === 'data') callback2('somedata');
      if (string2 === 'close') callback2();
    }
  }
  callback1(mockListener);
});

describe('callAPI middleware', () => {
  it('makes API call and saves response in <res.data>', async () => {
    const testQuery = { url: 'someurl' };
    const testQueryString = '?someparam=somevalue';
    
    const req = { query: testQuery };
    const res = { queryString: testQueryString };
    const next = () => {};

    await callAPI(req, res, next);
    expect(res.data).toStrictEqual('somedata');
  });
});