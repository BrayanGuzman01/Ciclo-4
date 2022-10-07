//console.log("Hola a todos");
const express = require('express');
const mongoose = require('mongoose');
const esquemaTarea = require('./Modelo/Tarea');

const app = express();
const Router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

Router.get('/', (req, res)=>{
    res.send('Inicio de mi api')
});

//VER DATOS
Router.get('/Tareas', (req, res)=>{
    esquemaTarea.find(function(err, datos){
        if(err){
            console.log("Error al leer los datos")
        }else{
            res.send(datos)
        }
    })
});

mongoose.connect('mongodb+srv://brayanguzman:4ZpaKrqdRf8fyKT@clusterprogramacion9.nqxgkli.mongodb.net/Grupo9?retryWrites=true&w=majority')

//INSERTAR DATO
Router.post('/Tareas', (req, res)=>{
    let nuevaTarea = new esquemaTarea({
        idTarea: req.body.Id,
        nombreTarea: req.body.Nombre,
        descripcionTarea: req.body.Descrip
    })

    nuevaTarea.save(function(err, datos){
        if(err)
        {
            console.log(err)
        }
        res.send('Tarea agregada')
    })
})

app.use(Router);
app.listen(3000, ()=>{
    console.log("Corriendo por el puerto 3000")
})

