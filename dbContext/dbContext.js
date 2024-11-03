import mongoose from "mongoose";

const {Schema} = mongoose

//url para conectar a mongo
const url_connect = 'mongodb+srv://matias:admin@cluster0.smmk1.mongodb.net/db_notas'

//realizar la conexión
//mongoose.connect(url_connect, {useNewUrlParser: true, useUnifiedTopology: true});

const options = {
    maxPoolSize: 25,
  }
//mongoose.connect(url_connect, {useNewUrlParser: true, useUnifiedTopology: true});
  await mongoose.connect(url_connect, options)

//esquema de la base de datos
const notaSchema = new Schema({
    titulo: String,
    mensaje: String,
    fecha: String
});

//se crea el modelo
const Notas = mongoose.model('notas', notaSchema)

const agregarNota = (req, res) =>{
    const nota = new Notas({
        titulo: req.body.titulo,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha,
        })
        nota.save()
        .then(re =>{
            res.redirect('/')
        })
}

const verNotas = async () => {
    try {
        const result = await Notas.find({});
        return result;
    } catch (err) {
        console.error('Error al obtener notas:', err);
        throw err; // Puedes manejar el error como necesites
    }
};

const borrarNota = async (modelo, id, res) => {
    try {
        const result = await Notas.deleteOne({_id:id})
        .then(re =>{
            res.redirect('/')
        });
        return result;
    } catch (err) {
        console.error('Error al obtener notas:', err);
        throw err; // Puedes manejar el error como necesites
    }
};

const modificarNota = async (id, datos, res) => {
    try {
        const result = await Notas.findByIdAndUpdate(id, datos, { new: true });
        res.redirect('/');
        return result;
    } catch (err) {
        console.error('Error al modificar la nota:', err);
        throw err;
    }
};


export {Notas, verNotas, agregarNota, borrarNota, modificarNota}


