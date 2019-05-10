const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstrumentoSchema = new Schema({
    nombre: {type:String},
    familia: {type:String},
    date_created: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Instrumento', InstrumentoSchema);