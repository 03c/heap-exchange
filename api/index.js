const app = require('express')();
const redis = require('redis');

app.get('/version', (req, res) => {
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send({ Version: '1.0.0' });
});

app.get('/*', (req, res) => {
  const url = req.params[0];

  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  const client = redis.createClient({
    url: process.env.REDIS_URL,
  });

  client.quit();

  res.send({ url: url });
});

module.exports = app;
