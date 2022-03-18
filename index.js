//Bước 1: incluce thư viện http
import express from "express";
import mongoose from 'mongoose';
import homeRoute from './src/routes/home'
import productsRoute  from './src/routes/products'
import { checkAuth } from './src/middlewares/checkAuth'

const app = express();



app.use(express.json())
app.use(homeRoute);

app.use("/api",productsRoute);

// mongoose.connect('mongodb://localhost:27017/we16308');
// app.listen(8000, ()=>{
// console.log("Server is running on post 8000")
// }); 
mongoose.connect("mongodb://localhost:27017/we16308")
    .then(() => console.log("Connect db thanh cong"))
    .catch((error) => console.log(error))
// Connect
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server ddang chay cong ${PORT}`);
});