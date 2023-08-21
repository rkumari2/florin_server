const { Router } = require('express')
const router = Router()

const suggestionsController = require('../controller/suggestions')

router.get('/', suggestionsController.index)
router.get('/:category', suggestionsController.showCategory)
router.get('/:id', suggestionsController.showId)
router.post('/:category', suggestionsController.create)
router.patch('/:id', suggestionsController.update)
router.delete('/:id', suggestionsController.destroy)

module.exports = router
