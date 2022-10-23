import { Request, Response, Router } from "express";
import PlatoControlador from "../../../controllers/plato";

let route = Router()

route.get("/",(req:Request,res:Response) => {
    res.status(200).send(`url => ${req.baseUrl}`)
})

route.post("/crear",PlatoControlador.crear)
route.get("/consultar/todo",PlatoControlador.consultarTodo)
route.get("/consultar/id/:idPlato",PlatoControlador.consultarPorId)
route.get("/consultar/nombre-plato/:nombre",PlatoControlador.consultarPorNombre)
route.put("/actualizar/:id",PlatoControlador.actualizar)
route.delete("/eliminar/:id",PlatoControlador.eliminar)
// route.get("/total-registro",PlatoControlador.totalDocumentos)
// route.delete("/eliminar-todo",PlatoControlador.eliminarTodo)

export default route
