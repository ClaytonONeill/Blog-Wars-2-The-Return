// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())

// CONTROLLER
const BlogsController = require('./controllers/blogs.js')
app.use('/blogs',BlogsController);

// MONGOOSE CONNECT
mongoose.connect(
    'mongodb://localhost:27017/blog',
    {useNewUrlParser:true,useUnifiedTopology:true},
    (req,res)=>{
        console.log('Blog Wars Have Begun')
    }
)
// EXPRESS CONNECT
app.listen(3000,(req,res)=>{
    console.log('Blog Wars Online - Port 3000')
})
