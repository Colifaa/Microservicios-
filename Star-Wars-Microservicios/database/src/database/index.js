const mongoose = require('mongoose');

const {MONGO_URI} = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI);



const Character = conn.model("Characters", require("./schemas/characterSchema"));
const Film = conn.model("Film", require("./schemas/filmSchema"));

Character.find().populate("films").then((res) => console.log(res[0].films))