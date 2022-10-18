import { api, helper } from "./helpers/helperPlato";


beforeAll(() => {
    console.log("antes de ejecutar los test")
})

describe("test del modulo plato",() => {

    test("subida de archivo temporal ", async () => {

    })

    test("registrar plato con todos los datos", async () => {

    })
    
    test("registrar plato sin enviar datos", async () => {

    })

    test("registrar plato enviando datos invalidaos", async () => {

    })

    test("consultar todos los platos => '5' ", async () => {

    })

    test("consultar plato por nombre por patron '1' ", async () => {

    })

    test("consultar plato por nombre por patron que no existe 'no trae nada' ", async () => {

    })

    test("consultar plato por nombre por patron '3' ", async () => {

    })

    test("consultar plato por id '1' ", async () => {

    })

    test("consultar plato por id que no existe 'no trae nada' ", async () => {

    })

    test("actualizar plato enviando datos 'ok' ", async () => {

    })
    
    test("actualizar plato enviando datos incompletos 'no se puede actualizar por falta de datos' ", async () => {

    })

    test("actualizar plato por id que no existe 'no actualiza nanda por que no lo encuentra' ", async () => {

    })

    test("actualizar plato asignadole precio 0 'error por que nose puede dejar unplato gratis' ", async () => {

    })

    test("actualizar foto plato 'ok' ", async () => {

    })

    test("actualizar foto plato sin haber subido la foto 'error al actulizar' ", async () => {

    })

    test("actualizar foto plato con un nombre erroneo 'error al actulizar por que no exite' ", async () => {

    })





})
