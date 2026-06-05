const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Tambahkan custom route rewriter di sini
server.use(jsonServer.rewriter({
  "/api/*": "/$1"
}));

server.use(middlewares);

// Menambahkan delay simulasi (opsional) untuk membuatnya lebih realistis seperti API sungguhan
server.use((req, res, next) => {
  setTimeout(next, 500);
});

server.use(router);

module.exports = server;
