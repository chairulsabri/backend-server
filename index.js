const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
// Menggunakan JSON.parse dan fs.readFileSync agar berjalan di-memory (menghindari error EROFS di Vercel)
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
const router = jsonServer.router(db);
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
