const {hash , compare} = require('bcryptjs')

const knex= require('../database/knex')
const AppError = require('../utils/AppError.js')

class UsersController{
    async Create(request, response){
        const {name, email, password} = request.body
    
        const passwordEncrypted = await hash(password,8) 
        
        const userExist = await knex('user').where(email)
        
        if (userExist) throw new AppError('Usuario Já em uso, tente outro!')
                
        await knex('users').insert(name, email, passwordEncrypted)
        
        return response.json()
    }
}

module.exports = UsersController