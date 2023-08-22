const { Router }= require('express')
const dishesRoute = Router()

const DishesControllers = require('../controllers/dishesControllers')
const dishesControllers = new DishesControllers()

dishesRoute.post('/', dishesControllers.Create)
dishesRoute.put('/editdish/:id', dishesControllers.Update)
dishesRoute.get('/showingredients/:dish_id', dishesControllers.Show)


module.exports = dishesRoute