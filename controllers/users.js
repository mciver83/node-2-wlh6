let id = 1

let users = [
  { id: id++, name: 'Carolyn', email: 'car@gmail.com' },
  { id: id++, name: 'Carolyn', email: 'car@gmail.com' },
  { id: id++, name: 'Carolyn', email: 'car@gmail.com' },
  { id: id++, name: 'Carolyn', email: 'car@gmail.com' }
]

module.exports = {
  read: (request, response) => {
    response.send(users)
  },

  getUser: (req, res) => {
    let { id } = req.params
    let user = users.find(user => +user.id === +id)
    res.send(user)
  },

  create: (req, res) => {
    let newUser = req.body
    newUser.id = id++

    users.push(newUser)
    res.send(users)
  },

  update: (req, res) => {
    let { name, email } = req.body
    let { id } = req.params

    let updatedUser = {
      id, 
      name, 
      email
    }

    let index = users.findIndex(user => +user.id === +id)
    users.splice(index, 1, updatedUser)

    res.send(users)
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = users.findIndex(user => +user.id === +id)

    users.splice(index, 1)

    res.send(users)
  }
}