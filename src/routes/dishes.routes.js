const { Router }= require('express')
const dishesRoute = Router()

const multer = require('multer')
const uploadConfig = require('../config/upload') 
const upload = multer(uploadConfig.MULTER)

const DishesControllers = require('../controllers/dishesControllers')
const DishesImageControllers = require('../controllers/dishesImageControllers')
const dishesControllers = new DishesControllers()
const dishesImageControllers = new DishesImageControllers()

const IngredientsControllers= require('../controllers/IngredientsControllers')
const ingredientsControllers= new IngredientsControllers()

dishesRoute.get('/:id' ,dishesControllers.Index)
dishesRoute.get('/showdishes', dishesControllers.Show)
dishesRoute.get('/ingredients/:id', ingredientsControllers.Show)

dishesRoute.post('/' ,dishesControllers.Create)
dishesRoute.post('/imageofdish', upload.single('newimage') ,dishesImageControllers.Create)

dishesRoute.patch('/imageofdish/:dish_id', upload.single('image') ,dishesImageControllers.Update)
dishesRoute.put('/editdish/:id', dishesControllers.Update)


module.exports = dishesRoute