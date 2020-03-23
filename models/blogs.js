const moongoose = require("mongoose")

cosnt blogSchema = mongoose.Schema({
  title:  String,
  description: String
})

module.exports = mongoose.model("Blog", blogSchema)
