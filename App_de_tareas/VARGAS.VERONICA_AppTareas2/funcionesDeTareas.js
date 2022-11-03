const fs = require("fs");

let archivoTareas = {
  archivo: "tareas.json",
  leerArchivo: function () {
    return JSON.parse(fs.readFileSync(this.archivo,"utf-8"));
  },

  escribirJson: function (arrayDeTareas) {
    let data = JSON.stringify(arrayDeTareas);
    fs.writeFileSync(this.archivo, data, "utf-8");
    /*let tareas = listaDeTareas.leerArchivo()
        tareas.push(nuevaTarea)
        this.guardarArchivo(tareas)*/
  },

  guardarTarea: function (tarea) {
    let listaDetareas = this.leerArchivo();
    listaDetareas.push(tarea);
    this.escribirJson(listaDetareas);
  },

  filtrarPorEstado: function (estado) {
    let listaDeTareas = this.leerArchivo();
    let tareasFiltradas = listaDeTareas.filter(
      (tarea) => tarea.estado === estado
    );
    return tareasFiltradas;
  },
};

module.exports = archivoTareas;
