import { Request, Response } from "express";
import Plato from "../models/plato";
import respuesta from "../types/respuesta"


let PlatoControlador ={

    crearPlato: async (req:Request,res:Response) => {
        let {body} = req
        let {...plato} = body
        // console.log("datos plato => ", plato)
        let platoNuevo= new Plato(plato)
        await platoNuevo.save()
        let platos =await Plato.find()
        console.log("listar datos => ",platos)
        res.status(200).json({mensaje:"ok"})

        
    }

}

export default PlatoControlador