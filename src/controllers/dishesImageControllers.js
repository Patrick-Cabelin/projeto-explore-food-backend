const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/diskStorage')

class dishImageController{
    async Create(request, response) {
        const diskStorage = new DiskStorage()
        const dishFileName = request.file?.filename
        const { name } = request.body
        const filename = await diskStorage.SaveFile(dishFileName)

        await knex('dishes').where({ name }).update({ image_of_dish: filename })
        
        return response.json()
    }
    
    async Update(request , response){
        
        const diskStorage = new DiskStorage()
        const { dish_id } = request.params
        const dishFileName = request.file.filename

        const dish = await knex('dishes').where({id: dish_id}).first()
        if(!dish) throw new AppError('Ação não autorizada',401)
        
        if (dish.image_of_dish) await diskStorage.DeleteFile(dish.image_of_dish)
        
        const filename = await diskStorage.SaveFile(dishFileName)
        dish.image_of_dish = filename
        
        await knex('dishes').update(dish).where({id : dish_id})

        return response.json(dish)
    }
}

module.exports = dishImageController