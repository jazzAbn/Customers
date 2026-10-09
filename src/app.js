const espress = require('express');
const routes = require('./routes');

class App {
   constructor() {
    this.server = espress();
    this.middlewares();
    this.routes();
  }

    middlewares() {
        this.server.use(espress.json());
  }
  routes() {
    this.server.use(routes);
 }
}

module.exports = app.server;