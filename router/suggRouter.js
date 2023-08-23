const { Router } = require('express')
const router = Router()

const suggestionsController = require('../controller/suggestions')



router.get('/', suggestionsController.index) // works 
router.get('/:name',suggestionsController.showCategory) //works 
router.patch('/:id', suggestionsController.update) // works
router.delete('/:id', suggestionsController.destroy1) // works









module.exports = router

