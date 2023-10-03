const axios = require("axios")
const films = require("./films.json")  

module.exports = {list: async () => {
    const results = await axios.get("http://database:3004/Film")
    return results.data;
}
};
