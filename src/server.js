require('express-async-errors')

const cors = require('cors')
const express = require('express')

server = express()
server.use(express.json())
server.use(cors())

const routes = require('./routes')
server.use(routes)

const upload = require('./config/upload')
server.use('/files', express.static(upload.UPLOAD_FOLDER)) 

const AppError = require('./utils/AppError')

const responseError = (error, request, response, next) => {
    
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            error: error.message,
            status: 'error'
        })
    }

    console.error(error)


    return response.status(500).json({
        message: 'Error interno do servidor',
        status: 'error'
    }) 
}

server.use(responseError)

const PORT = 3009
server.listen(PORT, ()=>console.log(`Servidor em Funcionamento na porta: ${PORT}`))