const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

describe('app.js', () => {
  describe('GET /', () => {
    it('status 200', async done => {
      const response = await request.get('/?url=https://daringfireball.net');
      expect(response.status).toBe(200);
      done();
    });
  });
});