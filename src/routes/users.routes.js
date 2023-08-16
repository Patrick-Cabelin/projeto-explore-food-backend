const { Router }= require('express')
const userRoute = Router()

const UsersController = require('../controllers/usersController')
const usersController = new UsersController()

userRoute.post('/', usersController.Create)


module.exports = userRoute