const { Router }= require('express')
const usersRoute = Router()

const UsersControllers = require('../controllers/usersController')
const usersControllers = new UsersControllers()

usersRoute.post('/', usersControllers.Create)


module.exports = usersRoute