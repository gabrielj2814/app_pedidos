import {model, Schema} from "mongoose";

let schemaPlato:Schema = new Schema({
    nombre:String,
    url_imagen:String,
    estado:Boolean,
    precio:Number,
    descriptcion:String
})

let plato =model("Plato",schemaPlato)


export default plato