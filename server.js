const server = require('./index');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
