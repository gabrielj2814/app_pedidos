import mongoose from "mongoose";
import { api, helper } from "./helpers/helperPlato";


beforeAll(async () => {
    await helper.eliminarDatos()
    await helper.precargarDatos()
})

describe("test del modulo plato",() => {

    test.skip("subida de archivo temporal ", async () => {

    })

    test("registrar plato con todos los datos", async () => {
        let idNuevo= new mongoose.Types.ObjectId("313131323232333333343434")
        let plato= {
            _id:idNuevo,
            "nombre":"plato nuevo x",
            "url_imagen":"imagen plato nuevo",
            "estado":"true",
            "precio":"10",
            "descriptcion":"descripcion platoooo"
        }
        let respuesta = await api.post("/api/v1/plato/crear")
        .send(plato)
        .expect(200)
    })
    
    test.skip("registrar plato sin enviar datos", async () => {

    })

    test.skip("registrar plato enviando datos invalidaos", async () => {

    })

    test("consultar todos los platos => '5' ", async () => {
        let respuesta = await api.get("/api/v1/plato/consultar/todo")
        .expect(200)
        let {body} = respuesta
        console.log(body.datos)
        expect(body.datos.length).toBe(5)
        // console.log(body.datos[4]._id==="313131323232333333343434")
        // expect(body.datos[4]._id).toEqual("313131323232333333343434")

    })

    test.skip("consultar plato por nombre por patron '1' ", async () => {

    })

    test.skip("consultar plato por nombre por patron que no existe 'no trae nada' ", async () => {

    })

    test.skip("consultar plato por nombre por patron '3' ", async () => {

    })

    test.skip("consultar plato por id '1' ", async () => {

    })

    test.skip("consultar plato por id que no existe 'no trae nada' ", async () => {

    })

    test.skip("actualizar plato enviando datos 'ok' ", async () => {

    })
    
    test.skip("actualizar plato enviando datos incompletos 'no se puede actualizar por falta de datos' ", async () => {

    })

    test.skip("actualizar plato por id que no existe 'no actualiza nanda por que no lo encuentra' ", async () => {

    })

    test.skip("actualizar plato asignadole precio 0 'error por que nose puede dejar unplato gratis' ", async () => {

    })

    test.skip("actualizar foto plato 'ok' ", async () => {

    })

    test.skip("actualizar foto plato sin haber subido la foto 'error al actulizar' ", async () => {

    })

    test.skip("actualizar foto plato con un nombre erroneo 'error al actulizar por que no exite' ", async () => {

    })

})
