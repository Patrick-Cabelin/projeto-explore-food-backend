const { Router }= require('express')
const authRoute = Router()

const AuthController = require('../controllers/authControllers')
const authController = new AuthController()

authRoute.post('/', authController.Create)

module.exports = authRoute