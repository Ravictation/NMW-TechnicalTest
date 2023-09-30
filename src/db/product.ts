import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    stock : {
        type: Number,
        required: true,
    }
}, {timestamps: true})

export const ProductModel = mongoose.model('Product', ProductSchema);

export const createProduct = (values: Record<string,any>)=> new ProductModel(values).save().then((product) => product.toObject())

export const getAllProduct = () => ProductModel.find();

export const updateProductById = (id: string, value: Record<string,any>) => ProductModel.findByIdAndUpdate(id, value)

export const deleteProductById = (id: string) => ProductModel.findByIdAndDelete(id)