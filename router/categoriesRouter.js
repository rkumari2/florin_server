const { Router } = require('express')
const categoryRouter = Router()

const categoriesController = require('../controller/categories')

//cateogry/:id/suggestion
categoryRouter.get('/', categoriesController.index) //not working as we are expected to pass a string but in the models we are expecting an ID
categoryRouter.get('/:id', categoriesController.showId)
// router.post('/:category', suggestionsController.create) // if issue above not resolved, not functioning 

module.exports = categoryRouter
