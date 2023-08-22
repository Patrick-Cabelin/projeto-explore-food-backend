const { Router }= require('express')
const dishesRoute = Router()

const multer = require('multer')
const uploadConfig = require('../config/upload') 
const upload = multer(uploadConfig.MULTER)

const DishesControllers = require('../controllers/dishesControllers')
const DishesImageControllers = require('../controllers/dishesImageControllers')
const dishesControllers = new DishesControllers()
const dishesImageControllers = new DishesImageControllers()


dishesRoute.post('/', dishesControllers.Create)
dishesRoute.put('/editdish/:id', dishesControllers.Update)
dishesRoute.patch('/imageofdish/:dish_id', upload.single('image') ,dishesImageControllers.Update)
dishesRoute.get('/showingredients/:dish_id', dishesControllers.Show)


module.exports = dishesRoute