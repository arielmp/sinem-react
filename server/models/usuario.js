const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type:String},
    email: {type:String},
    password: {type:String},
    tipo: {type:String} ,
    date_created: { type: Date, default: Date.now },
    profesor: { type: Schema.Types.ObjectId, ref: 'Profesor' }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);