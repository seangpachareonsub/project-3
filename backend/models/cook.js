const mongoose = require('mongoose')

const cookSchema = new mongoose.Schema({
  // put unique true back on name
  name: { type: String, required: true },
  ingredients: { type: Array, required: true },
  description: { type: String, required: true, maxlength: 1000 },
  method: { type: Array, required: true },
  prepTime: { type: String, required: true },
  cookTime: { type: String, required: true },
  serves: { type: String, required: true }
})

module.exports = mongoose.model('Cook', cookSchema)