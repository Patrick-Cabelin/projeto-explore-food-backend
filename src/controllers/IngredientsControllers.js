const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/diskStorage')

class IngredientsControllers{
    async Show(request,response){
        const dish_id = request.params.id
        const ingredients = await knex('ingredients').where({dish_id})
        return response.json(ingredients)
    }

}

module.exports = IngredientsControllers