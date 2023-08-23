const { Router } = require('express')
const router = Router()

const suggestionsController = require('../controller/suggestions')



router.get('/', suggestionsController.index) // Is working 21/08/2023
router.get('/:name',suggestionsController.showCategory)// Is working 21/08/2023
// router.get('/:id', suggestionsController.showId) // working
router.patch('/:id', suggestionsController.update) // Is working 21/08/2023
router.delete('/:id', suggestionsController.destroy) // Is working 21/08/2023









module.exports = router

