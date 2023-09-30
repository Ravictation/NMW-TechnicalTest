import express from 'express'
import product from './product'
import authentication from './authentication'

const router = express.Router()

export default (): express.Router => {
    product(router)
    authentication(router)
    return router
}