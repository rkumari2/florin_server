const { Router } =  require('express')

const userController = require('../controller/users')

const userRoutes = Router()

userRoutes.get('/', userController.index)
userRoutes.post('/register', userController.register)
userRoutes.post('/login', userController.login)

module.exports = userRoutes;
