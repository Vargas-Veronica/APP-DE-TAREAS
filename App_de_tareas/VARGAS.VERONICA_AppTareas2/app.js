let archivoTareas = require("./funcionesDeTareas");

let accion = process.argv[2];

switch (accion) {
  case "listar":
    console.log("Listado de tareas");
    console.log("------------------");
    let tareas = archivoTareas.leerArchivo();
    tareas.forEach((tarea, i) => {
      console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
    });
    console.log();
    break;

  case "crear":
    let titulo = process.argv[3];
    if (typeof titulo === "undefined") {
      console.log("Debes pasar un titulo de tarea");
    }
    

    let tarea = {
      titulo,
      estado: "pendiente",
    };

    archivoTareas.guardarTarea(tarea);
    break;

  case "filtrar":
    let estado = process.argv[3];
    if (typeof estado === "undefined") {
      console.log("Debes pasar un titulo de tarea");
      return;
    }
    let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
    console.log("Las tareas filtradas por estado: " + estado);
    console.log("------------------------------------");
    tareasFiltradas.forEach((tarea, i) => {
      console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
    });
    break;

  case "undefined":
    console.log();
    console.log("------------------------------------");
    console.log("No entiendo qué quieres hacer");
    console.log("Las acciones disponibles son: listar");
    console.log("------------------------------------");
    break;
}
