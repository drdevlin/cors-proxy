/* Integration Test */

const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const https = require('https');
jest.mock('https');
https.get.mockImplementation((string1, callback1) => {
  const mockListener = {
    on: (string2, callback2) => {
      if (string2 === 'close') callback2();
    }
  }
  callback1(mockListener);
});

describe('app.js', () => {
  describe('GET /', () => {
    it('responds 200 with a <url> query', async () => {
      const response = await request.get('/?url=something');
      expect(response.status).toBe(200);
    });
  });
});