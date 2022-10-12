import { model, Schema } from "mongoose";

let schemaOrden:Schema = new Schema({
    // orden:
    estado:String,
    total_orden:Number,
    fecha_orden:{
        type:Date,
        default: Date.now
    },
    cedula_cliente:String,
    tipo:String,
    numero_mesa:Number
})

let Orden = model("Orden",schemaOrden)

export default Orden