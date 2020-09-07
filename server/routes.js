const eventsRouter = require('./routes/eventRouter');

function routes(app) {
  app.use('api/v1/event', eventsRouter);
  // app.use('/', RedirectRouter);
}

module.exports = routes;
