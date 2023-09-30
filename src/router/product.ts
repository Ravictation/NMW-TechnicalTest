import express from 'express'
import { addProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product'
import { isAuthenticated } from '../middleware'
export default (router: express.Router) => {
    router.post('/product',isAuthenticated, addProduct)
    router.patch('/product/:id',isAuthenticated, updateProduct)
    router.get('/product',isAuthenticated, getProduct)
    router.delete('/product/:id',isAuthenticated, deleteProduct)
}