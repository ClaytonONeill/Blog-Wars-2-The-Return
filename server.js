const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/blog'
    (req,res)=>{
        console.log('Blog Wars Have Begun')
    }
)

app.listen(3000,(req,res)=>{
    console.log('Blog Wars Online - Port 3000')
})