const mongoose = require('mongoose');
const { Schema } = mongoose;

const EncargadoSchema = new Schema({
    nombre: {type:String},
    cedula: {type:String},
    estado_civil: {type:String},
    telefono_fijo: {type:String},
    telefono_movil: {type:String},
    email: {type:String},
    oficio: {type:String},
    lugar_trabajo: {type:String},
    telefono_trabajo: {type:String},
    direccion_trabajo: {type:String},
    date_created: { type: Date, default: Date.now },
    estudiantes: [{ type: Schema.Types.ObjectId, ref: 'Estudiante' }]
});

module.exports = mongoose.model('Encargado', EncargadoSchema);

/*
{
    "nombre": "Michael",
    "cedula": "123123123",
    "estado_civil": "Soltero",
    "telefono_fijo": "4324234234",
    "telefono_movil": "4324234234",
    "email": "micheal@asd.com",
    "oficio": "policia",
    "lugar_trabajo": "alla",
    "telefono_trabajo": "4324234234",
    "direccion_trabajo": "volio"
}*/