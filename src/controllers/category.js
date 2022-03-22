import Category from '../models/category'
import Product from '../models/products'

export const createCategory = async (req,res)=>{
    try {
        const category = await Category(req.body).save()
        res.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong the tao moi"})
    }
}
export const listCategory = async(req,res)=>{
    try {
        const category = await Category.find().exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({message:"Khong the hien thi"})
    }
}
export const listCategoryDetail = async (req,res)=>{
    try {
        const category = await Category.findOne({_id:req.params.id}).exec()
        const product = await Product.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        // const product = await Product.find({category}).select("-category").exec()
        res.json({category,product})
    } catch (error) {
        res.status(400).json({message:"Khong the hien thi"})
    }
}
export const deleteCategory = async (req,res)=>{
    try{
        const category = await Category.findByIdAndDelete({_id: req.params.id}).exec()
        res.json(category)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong the tao moi"})
    }
}
export const updateCategory = async (req,res)=>{
    try{
        const category = await Category.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true }).exec()
        res.json(product)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong the tao moi"})
    }
}