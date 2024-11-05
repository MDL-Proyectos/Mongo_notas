import Notas from './notes.js';

// Crear un nuevo usuario
export const createNote = async (req, res) => {
    const note = new Notas({
        titulo: req.body.titulo,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha
    });

    try {
        const newNota = await note.save();
        res.status(201).json(newNota);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//Ver todas las notas
export const getNotes = async (req, res) => {
    try {
        const result = await Notas.find({});
        return res.json(result);
    } catch (err) {
        console.error('Error al obtener notas:', err);
        res.status(500).json({ message: err.message });
    }
};

// Eliminar una nota por su ID
export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Notas.deleteOne({_id:id});
        res.json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar una nota por su ID
import mongoose from 'mongoose';

export const updateNota = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        const notaModificar = await Notas.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    titulo: req.body.titulo,
                    mensaje: req.body.mensaje,
                    fecha: req.body.fecha
                },
            },
            { new: true }
        );

        if (!notaModificar) {
            return res.status(404).json({ message: 'Nota no encontrada' });
        }

        res.json(notaModificar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



// Obtener un usuario por su DNI
export const getNotaById = async (req, res) => {
    try {
        //const nota = await Notas.findOne(Notas.deleteOne({_id:id}));
        const { id } = req.params;  // Asumiendo que el ID viene de los parámetros de la solicitud
        const nota = await Notas.findById(id);  // Busca la nota por su ID
        
        if (!nota) {
            return res.status(404).json({ message: 'Nota no encontrada' });
        }
        res.json(nota);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {createNote, updateNota, deleteNote, getNotaById, getNotes}
