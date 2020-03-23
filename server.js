const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blogs = require('./models/blogs.js')


app.use('blogs',)
app.use(express.static('public'))

mongoose.connect(
    'mongodb://localhost:27017/blog',
    {useNewUrlParser:true,useUnifiedTopology:true},
    (req,res)=>{
        console.log('Blog Wars Have Begun')
    }
)

app.listen(3000,(req,res)=>{
    console.log('Blog Wars Online - Port 3000')
})
