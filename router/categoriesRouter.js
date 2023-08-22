const { Router } = require('express')
const categoryRouter = Router()

const categoriesController = require('../controller/categories')

//cateogry/:id/suggestion
categoryRouter.get('/', categoriesController.index) 
categoryRouter.get('/:id', categoriesController.showId)
categoryRouter.get('/:id/suggestion', categoriesController.showSuggestion)
// router.post('/:category', suggestionsController.create) // 

module.exports = categoryRouter
