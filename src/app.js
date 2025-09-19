const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Azure DevSecOps Showcase App',
    version: process.env.VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

module.exports = app;
