const { Router } = require('express')
const categoryRouter = Router()

const categoriesController = require('../controller/categories')


// categoryRouter.get('/:id/suggestions', categoriesController.showSuggestion)
categoryRouter.get('/', categoriesController.index) 
categoryRouter.get('/:id', categoriesController.showId)


module.exports = categoryRouter
