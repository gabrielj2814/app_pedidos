import { Request, Response } from "express";
import Plato from "../models/plato";
import respuesta from "../types/respuesta"


let PlatoControlador ={

    crear: async (req:Request,res:Response) => {
        let {body} = req
        let {...plato} = body
        let platoNuevo= new Plato(plato)
        let platoCreado = await platoNuevo.save()
        // let platos =await Plato.find()
        // console.log("listar datos => ",platos)
        res.status(200).json(platoCreado)
    },
    
    consultarTodo:async (req:Request,res:Response) => {
        let platos = await Plato.find()
        res.status(200).json(platos)
    },
    
    consultarPorId:(req:Request,res:Response) => {
        let {idPlato} = req.params
        Plato.findById(idPlato)
        .then(plato => {
            if(plato){
                res.status(200).json(plato)
            }
            else{
                res.status(404).json({msj:"no encontrado"})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    consultarPorNombre:(req:Request,res:Response) => {
        let {nombre} = req.params
        console.log(nombre)
        // TODO: INVESTIGAR COMO HACER BUSQUEDA POR TEXTO
        // Plato.ensureIndexes({nombre:"text"})
        // Plato.find({
        //     $text:{
        //         $search: '\"plato\"',
        //         $caseSensitive: false,
        //     }
        // })
        // .then(plato => {
        //     if(plato){
        //         res.status(200).json(plato)
        //     }
        //     else{
        //         res.status(404).json({msj:"no encontrado"})
        //     }
        // })
        // .catch(err => {
        //     res.status(500).json(err)
        // })
    }
}

export default PlatoControlador