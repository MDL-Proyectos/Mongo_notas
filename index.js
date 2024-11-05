import express from 'express'
import {Notas, verNotas, agregarNota, borrarNota, modificarNota} from './dbContext/dbContext.js'

//import config from './config.json'
/*import BaseApi from './lib/baseApi.js'
const baseApi = new BaseApi("")
baseApi.BaseApi = BaseApi
*/


const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

app.listen('8000',(req, res)=>{
    console.log('aplicación en: http://localhost:8000')
})

app.get('/', async(req,res)=> {
    let notas = await verNotas(Notas)
    res.render('index', {notas})
})
//mongodb+srv://matias:<admin>@cluster0.smmk1.mongodb.net/

app.post('/agregar', (req, res)=> {
    agregarNota(req, res)
})

app.get('/borrar/:id', (req,res)=> {
    let id = req.params.id
    borrarNota(Notas, id, res)
})

app.get('/modificar/:id', async (req, res) => {
    try {
        const nota = await Notas.findById(req.params.id);
        if (!nota) {
            return res.status(404).send('Nota no encontrada');
        }
        res.render('modificar', { nota });
    } catch (err) {
        console.error('Error al obtener la nota:', err);
        res.status(500).send('Error al obtener la nota');
    }
})

app.post('/modificar/:id', async (req, res) => {
    try {
        const datosNota = {
            titulo: req.body.titulo,
            mensaje: req.body.mensaje,
            fecha: req.body.fecha,
        };
        await modificarNota(req.params.id, datosNota, res);
    } catch (err) {
        res.status(500).send('Error al modificar la nota');
    }
})
