const mongoose = require('mongoose')
const { Schema } = mongoose

const usersSchema = new Schema({
  _id: Number, // String is shorthand for {type: String}
  rec1: Number,
  rec2: Number,
  rec3: Number,
  rec4: Number,
  rec5: Number,
})

module.exports = mongoose.model('Users', usersSchema)
