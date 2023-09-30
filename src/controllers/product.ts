import express from 'express';
import { createProduct, getAllProduct, updateProductById, deleteProductById } from '../db/product';

export const addProduct = async (req: express.Request, res: express.Response) => {
    try {
        const {name, price, stock} = req.body
        const product = await createProduct({
            name,
            price,
            stock
        })
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message : error
        })
    }
}

export const updateProduct = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params
        const update = await updateProductById(id, req.body)
        return res.status(200).json({
            message: "success update product"
        })
    } catch (error) {
        console.log(error)
        return res.status(400)
    }
}

export const getProduct = async (req: express.Request, res:express.Response) => {
    try {
        const products = await getAllProduct()
        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(400)
    }
}

export const deleteProduct = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params
        const delProduct = await deleteProductById(id)
        return res.status(200).json({
            message: "success delete product"
        })
    } catch (error) {
        console.log(error)
        return res.status(400)
    }
}