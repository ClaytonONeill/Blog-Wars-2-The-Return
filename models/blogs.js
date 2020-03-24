const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title:  {type:String, required:true},
  description: String
})

module.exports = mongoose.model("Blog", blogSchema)
