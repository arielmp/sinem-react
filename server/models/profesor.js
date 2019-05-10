const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfesorSchema = new Schema({
    nombre: {type:String},
    cedula: {type:String},
    fecha_nacimiento: {type:String},
    telefono_fijo: {type:String},
    telefono_movil: {type:String},
    email: {type:String},
    direccion: {type:String},
    tipo: {type:String},
    instrumentos: [{ type: Schema.Types.ObjectId, ref: 'Instrumento' }],
    horario: [{type:String}],
    date_created: { type: Date, default: Date.now },
    estado: {type:String, default: 'Activo'}
});

module.exports = mongoose.model('Profesor', ProfesorSchema);