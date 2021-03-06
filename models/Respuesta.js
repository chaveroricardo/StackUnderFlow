const mongoose = require('mongoose')
const Schema = mongoose.Schema

const respuestaSchema = new Schema({
    preguntaId: [{
        type: Schema.ObjectId,
        ref: 'Pregunta'
    }],
    texto: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Respuesta = mongoose.model('Respuesta', respuestaSchema)
module.exports = Respuesta;