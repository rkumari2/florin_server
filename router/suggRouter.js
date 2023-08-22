const { Router } = require('express')
const router = Router()

const suggestionsController = require('../controller/suggestions')

router.get('/', suggestionsController.index) // working
router.get('/:id', suggestionsController.showId) // working
router.patch('/:id', suggestionsController.update)// working
router.delete('/:id', suggestionsController.destroy)//working




module.exports = router
