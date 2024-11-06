import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'parser';
import notesController from './controller.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const uri = process.env.URL_Mongo; 
//Conexión a mongo:
const URL_Mongo = process.env.URL_Mongo;
const url_connect = 'mongodb+srv://matias:admin@cluster0.smmk1.mongodb.net/db_notas'
const options = {
    maxPoolSize: 25,
  }
mongoose.connect(url_connect,options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar con la BD: '));
db.once('open', ()=>{
    console.log('SE CONECCION OK!: http://localhost:8000/notes/all');
});

//____________________________________________

//Configuración de Express con el middleware:
const app = express();

//app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    //origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    //credentials: true
}));
//Configuración del puerto:
//const PORT = process.env.PORT || 8000;
const PORT =  8000;
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server en ejecución en el puerto ${PORT}`);
});

app.get('/', (req,res)=>{
    res.send('La marrana llegó a la pocilga.')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas CRUD:
app.get('/notes/all', notesController.getNotes);
app.post('/notes/create', notesController.createNote);
app.get('/notes/find/:id', notesController.getNotaById);
app.put('/notes/update/:id', notesController.updateNota);
app.delete('/notes/delete/:id', notesController.deleteNote);

