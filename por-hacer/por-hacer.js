const fs = require('fs');

let tareas_por_hacer = [];

const save_data = () => {

    let data = JSON.stringify(tareas_por_hacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw Error('No se pudo escribir el archivo', err);
    });

};

const read_data = () => {

    try {
        tareas_por_hacer = require('../db/data.json');
    } catch (error) {
        tareas_por_hacer = []
    }

};

const crear = (descripcion) => {

    read_data();

    let todo = {
        descripcion,
        completado: false
    }

    tareas_por_hacer.push(todo);
    save_data();

    return todo;

};

const actualizar = (descripcion, completado) => {

    read_data();

    todo = tareas_por_hacer.find(t => t.descripcion === descripcion);

    if (!todo) {
        console.error(`Tarea [${descripcion}] no encontrada.`);
        return;
    }

    todo.completado = completado;

    save_data();

};

const get_tareas = () => {

    read_data();

    return tareas_por_hacer;

};

const borrar = (descripcion) => {

    read_data();

    ix = tareas_por_hacer.findIndex(t => t.descripcion === descripcion);

    if (ix < 0) {
        console.error(`Tarea [${descripcion}] no encontrada.`);
        return;
    }

    tareas_por_hacer.splice(ix, 1);

    save_data();

};

module.exports = {
    crear,
    actualizar,
    get_tareas,
    borrar
};