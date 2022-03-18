import Product from '../models/products'


export const listproduct = async (req, res) => {
    try{
        const product = await Product.find().exec()
        res.json(product)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong tim thay data"})
    }
  }
export const listProductDetail = async (req, res) => {

    try{
        const product =await Product.findOne({_id: req.params.id}).exec()
        res.json(product)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong tim thay data"})
    }
}
export const createProduct = async (req, res) => {
    try{
        const product = await new Product(req.body).save()
        res.json(product)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong the tao moi"})
    }

    
}
export const deleteProduct = async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete({_id: req.params.id}).exec()
        res.json(product)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong the tao moi"})
    }
 }
export const updateProduct = async (req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true }).exec()
        res.json(product)
        // response.json(products)
    }catch(error){
        res.status(400).json({message:"Khong the tao moi"})
    }
}


