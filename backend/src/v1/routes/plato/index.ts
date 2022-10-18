import { Request, Response, Router } from "express";
import PlatoControlador from "../../../controllers/plato";

let route = Router()

route.get("/",(req:Request,res:Response) => {
    res.status(200).send(`url => ${req.baseUrl}`)
})

export default route
