const request = require('supertest');
const express = require('express');
const app = require('../src/app'); // adjust path if needed

describe('GET /', () => {
  it('should return app info JSON', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Azure DevOps Portfolio App');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'healthy' });
  });
});
