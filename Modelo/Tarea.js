const mongoose = require('mongoose');

let esquemaTarea = new mongoose.Schema({
    idTarea: Number,
    nombreTarea: String,
    descripcionTarea: String
})

module.exports = mongoose.model('tarea', esquemaTarea, 'Tareas')