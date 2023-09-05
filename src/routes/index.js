const { Router }= require('express')
const routes = Router()

const usersRoutes =require('./users.routes')
const dishesRoutes =require('./dishes.routes')
const authRoutes =require('./auth.routes')


routes.use('/users', usersRoutes)
routes.use('/dishes', dishesRoutes)
routes.use('/auth', authRoutes)

module.exports = routes