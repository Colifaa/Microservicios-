const server = require ("./src/server")

const PORT = 3002;

server.listen(PORT, () => {
console.log('characters service listening on port 3002')

});
