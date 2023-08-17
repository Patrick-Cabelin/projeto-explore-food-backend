const { Router }= require('express')
const routes = Router()

const usersRoutes =require('./users.routes')


routes.use('/user', usersRoutes)

module.exports = routes