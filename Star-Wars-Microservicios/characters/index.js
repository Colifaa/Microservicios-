const server = require ("./src/server")

const PORT = 3001;

server.listen(PORT, () => {
console.log('characters service listening on port 3001')

});
