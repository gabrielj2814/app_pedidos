import supertest from "supertest"
import {app} from "../../index"
import Plato from "../../models/plato"

let api = supertest(app)

let helper = {
    datos:[
        {
            "nombre":"plato a",
            "url_imagen":"imagen plato nuevo",
            "estado":"true",
            "precio":"10",
            "descriptcion":"descripcion platoooo",
        },
        {
            "nombre":"plato b",
            "url_imagen":"imagen plato nuevo",
            "estado":"true",
            "precio":"10",
            "descriptcion":"descripcion platoooo",
        },
        {
            "nombre":"plato c",
            "url_imagen":"imagen plato nuevo",
            "estado":"true",
            "precio":"10",
            "descriptcion":"descripcion platoooo",
        },
        {
            "nombre":"plato d",
            "url_imagen":"imagen plato nuevo",
            "estado":"true",
            "precio":"10",
            "descriptcion":"descripcion platoooo",
        },
    ],

    eliminarDatos:async  () => {
        return await Plato.deleteMany({});
    },

    precargarDatos:async () => {
        let datas = helper.datos
        for await (const datosPlato of datas) {
            let plato= new Plato(datosPlato)
            await plato.save()
        }

    }

}

export {
    api,
    helper
}