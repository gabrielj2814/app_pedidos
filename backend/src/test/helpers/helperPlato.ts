import supertest from "supertest"
import {app} from "../../index"

let api = supertest(app)

let helper = {
    datosTest:[]

}

export {
    api,
    helper
}