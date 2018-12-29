const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');

const nextI18next = require('./i18n');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  nextI18NextMiddleware(nextI18next, app, server);

  server.get("/:locale(ru|en)?", (req, res) => {
    app.render(req, res, "index");
  });

  server.get('*', (req, res) => handle(req, res));

  await server.listen(80);
  console.log('> Ready on http://localhost:80')
})();