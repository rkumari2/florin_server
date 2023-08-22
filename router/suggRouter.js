const { Router } = require('express')
const router = Router()

const suggestionsController = require('../controller/suggestions')

router.get('/', suggestionsController.index) // working
router.get('/:id', suggestionsController.showId) // working
router.patch('/:id', suggestionsController.update)// working
router.delete('/:id', suggestionsController.destroy)//working

//cateogry/:id/suggestion
router.get('/:category', suggestionsController.showCategory) //not working as we are expected to pass a string but in the models we are expecting an ID
router.post('/:category', suggestionsController.create) // if issue above not resolved, not functioning 


module.exports = router
