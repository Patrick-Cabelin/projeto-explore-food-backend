const {hash} = require('bcryptjs')

const knex= require('../database/knex')
const AppError = require('../utils/AppError.js')

class UsersController{
    async Create(request, response){
        const {name, email, password} = request.body
    
        const passwordEncrypted = await hash(password,8) 
        const userExist = await knex('users').where({email}).first()
        

        if (userExist) throw new AppError('Usuario Já em uso, tente outro!', 401)
                
        await knex('users').insert({name,
            email,
            password: passwordEncrypted,
            admin: false})
        
        return response.json()
    }
}

module.exports = UsersController