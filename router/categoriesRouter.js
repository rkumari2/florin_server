const { Router } = require('express')
const categoryRouter = Router()

const categoriesController = require('../controller/categories')

//cateogry/:id/suggestion
categoryRouter.get('/:id/suggestions', categoriesController.showSuggestion)
categoryRouter.get('/', categoriesController.index) 
categoryRouter.get('/:id', categoriesController.showId)

// router.post('/:category', suggestionsController.create) // 

module.exports = categoryRouter
