const server = require("./src/server")

const { Character, Film ,Planet} = require("./src/database")


Character.get().then((res) => console.log(res))
Character.list().then((res) => console.log(res))





Film.list().then((res) => console.log(res))



Planet.list().then((res) => console.log(res))



server.listen(3004,() => {
    console.log("escuchando server 3004");
});