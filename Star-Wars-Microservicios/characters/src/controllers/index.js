const {catchedAsync} = require ("../utils")

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    CharactersCreate: catchedAsync(require("./CharactersCreate")),

}
