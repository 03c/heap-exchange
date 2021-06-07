const app = require('express')();

app.get('/version', (req, res) => {
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send({ Version: '1.0.0' });
});

module.exports = app;
