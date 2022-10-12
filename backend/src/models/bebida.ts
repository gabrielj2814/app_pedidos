import { model, Schema } from "mongoose";


let schemaBebida:Schema = new Schema({
    nombre:String,
    url_imagen:String,
    estado:Boolean,
    precio:Number,
    descriptcion:String,
    tipo:String
})

let Bebida = model("Bebida",schemaBebida)

export default Bebida