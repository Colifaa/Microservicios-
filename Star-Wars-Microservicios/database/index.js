const server = require("./src/server")

const { Character } = require("./src/database")


Character.get(4).then((res) => console.log(res))
Character.list().then((res) => console.log(res))
server.listen(3001,() => {
    console.log("escuchando server 3001");
});