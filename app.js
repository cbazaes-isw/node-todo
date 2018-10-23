const argv = require('./config/yargs').argv;
const por_hacer = require('./por-hacer/por-hacer');
const colors = require('colors');

colors.setTheme({
    done: 'green',
    pending: 'grey'
})

let cmd = argv._[0];
switch (cmd) {
    case 'crear':
        let tarea = por_hacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let tareas = por_hacer.get_tareas();

        for (let tarea of tareas) {
            if (tarea.completado) {
                console.log(colors.done(tarea.descripcion));
            } else {
                console.log(colors.pending(tarea.descripcion));
            }

        }

        break;
    case 'actualizar':
        por_hacer.actualizar(argv.descripcion, JSON.parse(argv.completado));
        break;
    case 'borrar':
        borrado = por_hacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
        break;

}