let fs = require('fs');

let tareasJson = fs.readFileSync('app-tareas/tareas.json', {encoding : 'utf-8'});
let tareasParseadas = JSON.parse(tareasJson)


module.exports = tareasJson;

