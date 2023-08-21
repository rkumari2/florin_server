const express = require('express')
const router = express.Router()

const suggestionsController = require('../controller/suggestions')

router.get('/', suggestionsController.index)
router.get('/:category', suggestionsController.show)
router.get('/:id', suggestionsController.showById)
router.post('/', suggestionsController.create)
router.patch('/:id', suggestionsController.update)
router.delete('/:id', suggestionsController.destroy)

module.exports = router
