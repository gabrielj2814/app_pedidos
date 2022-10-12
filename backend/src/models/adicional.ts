import { model, Schema } from "mongoose";


let schemaAdicional:Schema = new Schema({
    nombre:String,
    url_imagen:String,
    estado:Boolean,
    precio:Number,
    descriptcion:String,
    procion:Number
})

let Adicional= model("Adicional",schemaAdicional)

export default Adicional