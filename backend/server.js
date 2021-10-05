const express=require("express");
const app=express(); // Making an object of express module
const dotenv=require('dotenv');
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Api is running..')
})

const PORT = process.env.PORT||5000;
app.listen(5000,console.log(`Server start at port ${PORT}`))