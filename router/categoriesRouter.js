const { Router } = require('express')
const CategoryRouter = Router()

const categoriesController = require('../controller/categories')

//cateogry/:id/suggestion
Categoryrouter.get('/', categoriesController.index) //not working as we are expected to pass a string but in the models we are expecting an ID
// router.post('/:category', suggestionsController.create) // if issue above not resolved, not functioning 

module.exports = CategoryRouter
