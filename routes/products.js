import express from'express';
const route = express.Router();


const products =[
    {id:1,name:"tung"},
    {id:2,name:"tung1"},
]
route.get('/products', (request,response)=>{
   
    response.json(product)
});
route.get('/products/:id',(request,response)=>{
  const product = products.find (item => item.id === +request.params.id)
    response.json(product)
 })
 route.get('/products', (request,response)=>{
   product.push(request,body)
    response.json(product)
});

export default route;