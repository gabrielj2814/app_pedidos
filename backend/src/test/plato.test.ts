import mongoose from "mongoose";
import { api, helper } from "./helpers/helperPlato";


beforeAll(async () => {
    await helper.eliminarDatos()
    await helper.precargarDatos()
})

describe("test del modulo plato",() => {

    test("consultar todos los platos me debe traer 4 'ok 200' ", async () => {
        let respuesta = await api.get("/api/v1/plato/consultar/todo")
        .expect(200)
        let {body} = respuesta
        expect(body.datos.length).toBe(4)
    })

    test("consultar plato por nombre por patron me debe de traer uno 'ok 200' ", async () => {
        let nombre = "plato a"
        let respuesta = await api.get("/api/v1/plato/consultar/nombre-plato/"+nombre)
        .expect(200)
        let {body} = respuesta
        expect(body.datos.length).toBe(1)
    })

    test("consultar plato por nombre por patron que no existe no debe traer nada 'error 404' ", async () => {
        let nombre = "plato b"
        let respuesta = await api.get("/api/v1/plato/consultar/nombre-plato/"+nombre)
        .expect(404)
        let {body} = respuesta
        expect(body.datos.length).toBe(0)
    })

    test("consultar plato por nombre por patron me debe de traer cuatro 'ok 200' ", async () => {
        let nombre = "plato"
        let respuesta = await api.get("/api/v1/plato/consultar/nombre-plato/"+nombre)
        .expect(200)
        let {body} = respuesta
        expect(body.datos.length).toBe(4)
    })

    test("consultar plato por id que no existe 'error 404' ", async () => {
        let id = "313131323232333333343333"
        let respuesta = await api.get("/api/v1/plato/consultar/id/"+id)
        .expect(404)
        let {body} = respuesta
        expect(body.datos.length).toBe(0)
    })

    test.skip("consultar plato por id pero pasando un dato invalido 'error' ", async () => {

    })

    test("registrar plato con todos los datos 'ok 200'", async () => {
        let idNuevo= new mongoose.Types.ObjectId("313131323232333333343434")
        let plato= {
            _id:idNuevo,
            "nombre":"pasta",
            "url_imagen":"imagen plato nuevo",
            "estado":"true",
            "precio":10,
            "descriptcion":"descripcion platoooo",
            name_tmp_imagen:"nombre tempral"
        }
        let respuesta = await api.post("/api/v1/plato/crear")
        .send(plato)
        .expect(200)
    })

    test("consultar plato por id me debe traer uno 'ok 200' ", async () => {
        let id = "313131323232333333343434"
        let respuesta = await api.get("/api/v1/plato/consultar/id/"+id)
        .expect(200)
        let {body} = respuesta
        expect(body.datos.length).toBe(1)
    })
    
    test("registrar plato sin enviar datos 'error 400'", async () => {
        let plato= {}
        let respuesta = await api.post("/api/v1/plato/crear")
        .send(plato)
        .expect(400)
        let {body} = respuesta
    })

    test.skip("subida de archivo temporal ", async () => {

    })

    test.skip("enviando tipos de datos incorrectos 'error'", async () => {

    })

    test.skip("registrar plato enviando datos invalidos 'error'", async () => {

    })

    test.skip("registrar plato enviando datos vacios con propiedades definidas 'error'", async () => {

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
