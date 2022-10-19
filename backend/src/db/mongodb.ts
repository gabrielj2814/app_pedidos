import mongoose from "mongoose";
import  dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.resolve(__dirname,"../../.env")})
let {
    HOST_DB,
    NODE_ENV,
    MONGODB_PORT,
    MONGODB_DB_NAME_PRO,
    MONGODB_DB_NAME_DEV,
    MONGODB_DB_NAME_TEST,
    MONGODB_ADMIN_USER,
    MONGODB_ADMIN_PASS
} = process.env

let DB:any = ""
if(NODE_ENV=="test"){
    DB=MONGODB_DB_NAME_TEST
}
else if(NODE_ENV=="dev"){
    DB=MONGODB_DB_NAME_DEV
}
else if(NODE_ENV=="start"){
    DB=MONGODB_DB_NAME_PRO
}
else{
    console.log("la variable de entorno NODE_ENV esta vacia o no tiene ninguno de los valores esperados")
}

let conexionString:string = `mongodb://${MONGODB_ADMIN_USER}:${MONGODB_ADMIN_PASS}@${HOST_DB}:${MONGODB_PORT}/${DB}?authSource=admin`


console.log("uri mongodb => ",conexionString)

mongoose.connect(conexionString)
.then(() => {
    console.log("conectandose a la base de datos con exito")
})
.catch(error => {
    console.error("error al conectarce a la base de datos => "+error)
})

export default mongoose