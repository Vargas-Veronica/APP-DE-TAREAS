let funcionesDeTareas = require ("./funcionesDeTareas");

let fs = require('fs');
let process = require('process');
let accion = process.argv[2];
let titulo = process.argv[3];
let estado = process.argv[4];
let tareasJson = fs.readFileSync('app-tareas/tareas.json', {encoding : 'utf-8'});
let tareasParseadas = JSON.parse(tareasJson)

switch (accion) {
    case 'listar':
        if (tareasParseadas.length === 0) {
            console.log('La lista de tareas esta vacia');
        }else{
            console.log('----------------------------------------------');
            for(let i = 0; i < tareasParseadas.length; i++){
                console.log(`${i + 1} - Titulo : ${tareasParseadas[i].titulo}\n     Estado : ${tareasParseadas[i].estado}` );
                console.log('--------------------------------------------');
            }
        }
        break;
    case 'crear':
        if (estado != 'pendiente' && estado != 'en progreso' && estado != 'terminada') {
            console.log('estado tiene que ser pendiente, en progreso o terminada');
        } else {
            tareasParseadas.push({
                titulo,
                estado
            })
            let tareasActualizadas = JSON.stringify(tareasParseadas);
            fs.writeFileSync('app-tareas/tareas.json', tareasActualizadas, 'utf-8' )
            console.log(`Tarea ${titulo}, creada`);
        }
        break;
    case 'deshacer':
        tareasParseadas.pop()
        let tareasActualizadas = JSON.stringify(tareasParseadas);
        fs.writeFileSync('app-tareas/tareas.json', tareasActualizadas, 'utf-8' )
        console.log('todo ok');
        break;
    case 'borrar':
        let tareasFiltradas = []
        for (let i = 0; i < tareasParseadas.length; i++) {
            if (tareasParseadas[i].titulo != titulo) {
                tareasFiltradas.push(tareasParseadas[i])
            }
        }
        let tareasAct = JSON.stringify(tareasFiltradas);
        fs.writeFileSync('app-tareas/tareas.json', tareasAct, 'utf-8' )
        console.log('todo ok');
        break;
    case undefined:
        console.log('Atención - Tienes q pasar una acción');
        break;
    default:
        console.log('No entiendo qué quieres hacer');
        break;
}
