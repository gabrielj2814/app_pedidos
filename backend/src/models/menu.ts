import { model, Schema } from "mongoose";

let schemaMenu:Schema= new Schema({
    nombre:String,
    platos:{
        type:Array,
        default:[]
    },
    bebidas:{
        type:Array,
        default:[]
    },
    adicionales:{
        type:Array,
        default:[]
    },
    estado:String,
})

let Menu = model("Menu",schemaMenu)
export default Menu