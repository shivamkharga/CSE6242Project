const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 80

app.set('port', port)
const users = require('./backend/routes/api/users')

console.log('env:', process.env.NODE_ENV)

app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'dist')))

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
} else {
  express.static('static')

  app.get('/', function (req, res) {
    res.send('hello from nodejs. Frontend is at different port ')
  })
}

app.listen(port, () => {
  console.log(`listening to port: ${port}`)
})
