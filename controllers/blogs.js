const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs.js');


// INDEX ROUTE
// ========================

router.get('/', async (req,res) => {
  try {
    const blogs = await Blogs.find()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// CREATE ROUTE
// ========================

router.post('/', async (req,res) => {
  try {
   const newBlog = await Blogs.create(req.body)
    res.status(200).json(newBlog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// DELETE ROUTE
// ========================

router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blogs.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedBlog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// UPDATE ROUTE
// ========================

router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedBlog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})


module.exports = router;
