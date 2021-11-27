const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

const port = process.env.PORT || 80

app.set('port', port)
const users = require('./backend/routes/api/users')
const recipes = require('./backend/routes/api/recipe')

app.use('/api/users', users)
app.use('/api/recipe', recipes)

app.use('/', express.static(path.join(__dirname, 'dist')))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`listening to port: ${port}`)
})
