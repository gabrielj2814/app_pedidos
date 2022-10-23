import {model, Schema} from "mongoose";

let schemaPlato:Schema = new Schema({
    nombre:String,
    url_imagen:String,
    estado:Boolean,
    precio:Number,
    descriptcion:String
})

schemaPlato.index({nombre: "text"})

let Plato =model("P",schemaPlato)


export default Plato