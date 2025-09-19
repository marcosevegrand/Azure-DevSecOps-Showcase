const request = require('supertest');
const app = require('../src/app'); // just the Express app, no listen()

describe('GET /', () => {
  it('should return app info JSON', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Azure DevSecOps Showcase App');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'healthy' });
  });
});
