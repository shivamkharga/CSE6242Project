const mongoose = require('mongoose')

const uri =
  'mongodb+srv://nodejs:dD8vzzU%406uu3U5.@cluster0.i7bbr.mongodb.net/cse6242'

mongoose.connect(uri)

// client.connect(function (err) {
//   if (err) throw err
//   console.log('Database connection has been established')
// })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})
