const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const Diskstorage = require('../providers/diskStorage')


class DishesControllers{
    async Create(request, response){
        const {name, description, category, price, ingredients} = request.body
        
        const dishExist = await knex('dishes').where({name}).first()
        
        console.log(dishExist)
        if(dishExist) throw new AppError('Prato ja existente')

        const [dish_id] = await knex('dishes').insert({
            name,
            description,
            category,
            price
        })

       
        const ingredients_dish = ingredients.map(name =>{ 
            return { 
                name,
                dish_id,
    
            }
        })

        await knex('ingredients').insert(ingredients_dish)

        return response.json()
    }

    async Update(request, response){

        const dish_id = request.params.id
        const {name, description, category, price, ingredients} = request.body
        const dish = await knex('dishes').where({id: dish_id}).first()
  
        if(!dish) throw new AppError('Prato não existente')

        dish.name = name ?? dish.name
        dish.description = description ?? dish.description
        dish.category = category ?? dish.category
        dish.price = price ?? dish.price
        
        if (ingredients?.length !== 0) {
    
            await knex('ingredients').where({dish_id}).delete()
        
            const ingredientsUpdate = ingredients.map(name => {
                return {
                    name,
                    dish_id,
                }
            })
        
            await knex('ingredients').insert(ingredientsUpdate)
        }
        

        await knex('dishes').where({id: dish_id}).update({
            name,
            description,
            price,
            category
        })

        
        return response.json()
    }
    
    async Show(request,response){
        const {dish_id} = request.params

        const ingredients = await knex('ingredients').where({dish_id})
        console.log(ingredients)
        return response.json(ingredients)
    }
}


module.exports = DishesControllers