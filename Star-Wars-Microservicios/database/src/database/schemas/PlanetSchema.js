
const { Schema } = require ("mongoose")

const PlanetSchema = new Schema( {
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String ,
    climate: String ,
    gravity: String ,
    terrain: String,
    surface_water: String,
    residents: [{type:String, ref: "Planet"}],
    films: [{type:String, ref: "Film"}]
},);



PlanetSchema.statics.list = async function () {
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

module.exports = PlanetSchema;