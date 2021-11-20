const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 80

app.set('port', port)
const users = require('./backend/routes/api/users')

app.use('/api/users', users)

app.use('/', express.static(path.join(__dirname, 'dist')))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`listening to port: ${port}`)
})
