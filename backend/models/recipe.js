const mongoose = require('mongoose')
const { Schema } = mongoose

const recipeSchema = new Schema(
  {
    _id: Number, // String is shorthand for {type: String}
    name: String,
    minutes: Number,
    num_of_steps: Number,
    //   steps: String,
    avg_ratings: Number,
  },
  { collection: 'recipe' }
)

module.exports = mongoose.model('recipe', recipeSchema)
