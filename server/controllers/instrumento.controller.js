const Instrumento = require('../models/instrumento');
const InstrumentoController = {};

InstrumentoController.getInstrumentos = async (req, res) => {
    const instrumentos = await Instrumento.find().sort('nombre');
    res.json(instrumentos);
};

InstrumentoController.getInstrumento = async (req, res) => {
    try {
        const instrumento = await Instrumento.findById(req.params.id);
        res.json(instrumento);
    }catch(error){
        res.json({
            status:'error'
        })
    }
};

InstrumentoController.createInstrumento = async (req, res) => {
    const nuevoInstrumento = new Instrumento(req.body);
    //rom es el objeto nuevo que se acaba de crear junto al _id
    obj = await nuevoInstrumento.save()    
    res.json(obj);
};

InstrumentoController.editInstrumento = async (req, res) => {
    await Instrumento.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Instrumento Actualizado'
    });
};

InstrumentoController.deleteInstrumento = async (req, res) => {
    await Instrumento.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Instrumento Eliminado'
    });
};

InstrumentoController.existe = async (req,res) => {
    let nombre = req.params.nombre;
    const instrumento = await Instrumento.findOne({nombre: nombre});
    console.log(instrumento);
    res.json(instrumento);
}

module.exports = InstrumentoController;