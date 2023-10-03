
const axios = require("axios")
const planets = require("./planets.json")  

module.exports = {list: async () => {
    const results = await axios.get("http://database:3004/Planet")
    return results.data;
}
};


