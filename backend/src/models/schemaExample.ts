
import { model, Schema } from "mongoose"

let esquemaTarea:Schema= new Schema({
    "id_espacio": String,
    "id_persona": String,
    "nombre_tarea":String,
    "create_date": {type:Date, default: Date.now},
    "descripcion_tarea": String,
    "personas_asignadas":Array
})

let Tarea=model("Tarea",esquemaTarea)

export default Tarea