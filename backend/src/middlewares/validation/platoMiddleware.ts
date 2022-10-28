import { NextFunction, Request, Response } from "express";
import respuesta from "../../types/respuesta";

export const middleware = {
    validarCamposPlato: (req:Request,res:Response,next:NextFunction) => {
        // validaciones para la creacion de un plato nuevo
        let respuestaApi:respuesta ={
            codigo:0,
            tipo_mensaje:"string",
            mensaje:"string",
            detalle_respuesta:{}
        } 
        let {body} = req
        let {name_tmp_imagen = undefined,...plato} = body
        let propiedadesDefinidad:any = {
            nombre:"",
            url_imagen:"",
            estado:"",
            precio:"",
            descriptcion:"",
            name_tmp_imagen:""
        }
        // let tiposDeDatos:any = {
        //     nombre:"string",
        //     url_imagen:"string",
        //     estado:"boolean",
        //     precio:"number",
        //     descriptcion:"string",
        //     name_tmp_imagen:"string"
        // }
        propiedadesDefinidad.name_tmp_imagen=(name_tmp_imagen===undefined)?"undefined":"defined"
        propiedadesDefinidad.nombre=(plato.nombre===undefined)?"undefined":"defined"
        propiedadesDefinidad.estado=(plato.estado===undefined)?"undefined":"defined"
        propiedadesDefinidad.precio=(plato.precio===undefined)?"undefined":"defined"
        propiedadesDefinidad.descriptcion=(plato.descriptcion===undefined)?"undefined":"defined"
        let estado:boolean=false
        for (const key in propiedadesDefinidad) {
            if(propiedadesDefinidad[key]==="undefined"){
                estado=false
                break
            }
            else{
                estado=true
            }
        }
        if(estado){
            next()
        }
        else{
            respuestaApi.codigo=400
            respuestaApi.tipo_mensaje="danger"
            respuestaApi.mensaje="nay propiedades sin definir"
            respuestaApi.detalle_respuesta=propiedadesDefinidad
            res.status(400).json(respuestaApi)
        }
    }
}