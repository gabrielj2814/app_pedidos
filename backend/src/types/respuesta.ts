export default interface respuesta {
    codigo:number,
    tipo_mensaje:string,
    mensaje:string,
    detalle_respuesta?:any,
    datos?:any,
    token?:string
}