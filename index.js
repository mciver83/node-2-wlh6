const express = require('express')

const userCtrl = require('./controllers/users')

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/users', userCtrl.read)
app.get('/api/users/:id', userCtrl.getUser)
app.post('/api/users', userCtrl.create)
app.put('/api/users/:id', userCtrl.update)
app.delete('/api/users/:id', userCtrl.delete)

app.listen(port, () => {
  console.log('listening on port', port)
})