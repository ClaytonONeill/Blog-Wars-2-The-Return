const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs.js');


// INDEX ROUTE
// ========================

router.get('/', (req,res) => {
  Blogs.find({}, (error, foundBlog) => {
    res.json(foundBlog)
  })
})

// CREATE ROUTE
// ========================

router.post('/', (req,res) => {
  Blogs.create(req.body, (err,createdBlog) => {
    res.json(createdBlog)
  })
})

// DELETE ROUTE
// ========================

router.delete('/:id', (req, res) => {
  Blogs.findByIdAndRemove(req.params.id, (error, deletedBlog) => {
    res.json(deletedBlog)
  })
})

// UPDATE ROUTE
// ========================

router.put('/:id', (req, res) => {
  Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedBlog) => {
    res.json(updatedBlog)
  })
})


module.exports = router;
