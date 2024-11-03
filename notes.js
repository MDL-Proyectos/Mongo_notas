import mongoose from 'mongoose';

const notasSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true,
    },
    mensaje: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    }
});

const Notas = mongoose.model('notas', notasSchema);


export default Notas;