import "./db/mongodb"
import express, { Request, Response } from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import path from "path"
// import rutas
import platoRoute from "./v1/routes/plato"

let app = express()
let rutaPublic:string=path.resolve(__dirname,"../public")
dotenv.config({path:path.resolve(__dirname,"../.env")})
let {PORT} = process.env
// set
app.set("PORT",PORT || 5500)
// get
app.get("/help",(req:Request,res:Response) =>{
    res.send("servidor corriendo con exito")
})
// middlewar
app.use(cors())
.use(express.json())
.use(express.static(rutaPublic))
.use(morgan("dev"))

// rooters
// v1
app.use("/api/v1/plato",platoRoute)

export default app