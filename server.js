const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blogs = require('./models/blogs.js')


<<<<<<< HEAD
app.use('blogs',)
app.use(express.static('public'))

mongoose.connect(
    'mongodb://localhost:27017/blog',
    {useNewUrlParser:true,useUnifiedTopology:true},
    (req,res)=>{
        console.log('Blog Wars Have Begun')
    }
)
=======
// mongoose.connect(
//     'mongodb://localhost:27017/' + dbCollection,
//     (req,res)=>{
//         console.log('Blog Wars Have Begun')
//     }
// )
>>>>>>> 8327210818fee0def5db69b68d1c37847339213c

app.listen(3000,(req,res)=>{
    console.log('Blog Wars Online - Port 3000')
})
