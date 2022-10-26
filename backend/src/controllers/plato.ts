import { Request, Response } from "express";
import Plato from "../models/plato";
import respuesta from "../types/respuesta"


let PlatoControlador ={

    crear: async (req:Request,res:Response) => {
        let {body} = req
        let {...plato} = body
        let platoNuevo= new Plato(plato)
        let platoCreado = await platoNuevo.save()
        res.status(200).json(platoCreado)
    },
    
    consultarTodo:(req:Request,res:Response) => {
        let respuestaApi:respuesta ={
            codigo:0,
            tipo_mensaje:"string",
            mensaje:"string",
            datos:[],
            detalle_respuesta:{}
        } 
        Plato.find({})
        .then(platos => {
            // console.log("aqui =>",platos)
            respuestaApi.codigo=200
            respuestaApi.tipo_mensaje="seccess"
            respuestaApi.mensaje="consulta completada"
            respuestaApi.datos=platos
            res.status(200).json(respuestaApi)
        })
        .catch(error => {
            respuestaApi.codigo=400
            respuestaApi.tipo_mensaje="danger"
            respuestaApi.mensaje="no hay platos registros en la base de datos"
            respuestaApi.detalle_respuesta=error
            res.status(400).json(respuestaApi)
        })
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
            res.status(503).json(err)
        })
    },

    consultarPorNombre:(req:Request,res:Response) => {
        let {nombre} = req.params
        console.log(nombre)
        Plato.find({$text:{$search:`/${nombre}/`}})
        .then(platos => {
            res.status(200).json(platos)
        })
        .catch(error => {
            res.status(503).json(error)
        })
    },
    
    actualizar: async (req:Request,res:Response) => {
        let {...platoUpdate} = req.body
        let {id} = req.params
        Plato.updateOne({_id:id},platoUpdate)
        .then(  plato => {
            if(plato){
                res.status(200).json(plato)
            }
            else{
                res.status(404).json({msj:"no encontrado"})
            }
        })
        .catch(err => {
            res.status(503).json(err)
        })
    },

    eliminar: (req:Request,res:Response) => {
        let {id} = req.params
        Plato.deleteOne({_id:id})
        .then(  respuesta => {
            if(respuesta){
                res.status(200).json(respuesta)
            }
            else{
                res.status(404).json({msj:"no encontrado"})
            }
        })
        .catch(err => {
            res.status(503).json(err)
        })
    },

    // totalDocumentos:async (req:Request,res:Response) => {
    //     Plato.count()
    //     .then(  respuesta => {
    //         console.log(respuesta)
    //         res.status(200).json({total:respuesta})
    //     })
    //     .catch(err => {
    //         res.status(503).json(err)
    //     })
    // },

    // eliminarTodo:async  (req:Request,res:Response) => {
    //     Plato.deleteMany({})
    //     .then(  respuesta => {
    //         res.status(200).json(respuesta)
    //     })
    //     .catch(err => {
    //         res.status(503).json(err)
    //     })
    // }
}

export default PlatoControlador