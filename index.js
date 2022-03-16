//Bước 1: incluce thư viện http
import express from "express";
import { response } from "express";
import { request } from "express";
import homeRoute from './src/controllers/routes/home'
import productsRoute  from './src/controllers/routes/products'

import { checkAuth } from './src/middlewares/checkAuth'

const app = express();
app.use(express.json())
app.use((request,response,next)=>{
  console.log("buoc 1")
  next()
})

app.use(homeRoute);

app.use("/api",checkAuth,productsRoute);
// app.use(productsidRoute);
//app.get('/', (require,response)=>{
 //   response.send('<h1>Home Page</h1><p>context</p>');
//})
//app.get('/products', (require,response)=>{
   // response.send('<h1>product Page</h1>');
//})

//app.get('/products/:productId',(request,response)=>{
  //  response.send(`
    //<h1>Product Detail</h1>
    //${request.params.productId}
//`);
//})
// buoc 3:lang nghe cong thuc thi
app.listen(8000, ()=>{
console.log("Server is running on post 8000")
}); 