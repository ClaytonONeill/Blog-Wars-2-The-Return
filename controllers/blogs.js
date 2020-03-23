const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs.js');


// INDEX ROUTE
// ========================
router.get('/', (req,res) => {
  Blogs.find({}, (error, foundBlog) => {

  })
})




module.exports = router;
