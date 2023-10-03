const axios = require("axios")
const characters = require("./characters.json")  

module.exports = {list: async () => {
    const results = await axios.get("http://database:3004/Character")
    return results.data;
}
};