

const { Schema } = require ("mongoose")

const characterSchema = new Schema({
        _id: String,
        name: String,
        height: String,
        mass: String,
        hair_color: String,
        skin_color: String,
        eye_color: String,
        birth_year: String,
        gender: String,
        homeworld: [{type:String, ref: "Planet"}], // ID ASOCIADO CON LOS PLANETAS (referencias de los modelos)
        films: [{type:String, ref: "Film"}] // ARRAY DE ID ASOCIADOS CON LAS PELICULAS (referencias de los modelos)
});

module.exports = characterSchema;