const opciones_crear_eliminar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea.'
    }
};

const opciones_actualizar = {
    descripcion: opciones_crear_eliminar,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Indicador de completitud de la tarea.'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer.', opciones_crear_eliminar)
    .command('actualizar', 'Actualiza una tarea por hacer.', opciones_actualizar)
    .command('borrar', 'Elimina una tarea por hacer.', opciones_crear_eliminar)
    .help()
    .argv;

module.exports = {
    argv
}