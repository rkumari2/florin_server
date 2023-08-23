const { Router } = require('express')
const categoryRouter = Router()

const categoriesController = require('../controller/categories')


categoryRouter.get('/:id/suggestions', categoriesController.showSuggestions)
categoryRouter.get('/', categoriesController.index) 
categoryRouter.get('/:id', categoriesController.showId)
categoryRouter.post('/:id/suggestions', categoriesController.create) // Is working 21/08/2023




module.exports = categoryRouter
