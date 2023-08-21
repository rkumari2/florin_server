const Suggestion = require('../model/Suggestion')

async function index(req,res) {
    try {
        const suggestions = await Suggestion.getAll()
        res.status(200).json(suggestions)

    } catch (err){
        res.status(500).json({ error:err.message })
    }
}

async function showCategory(req,res) {
    try {
        const categoryName = req.params.category.toLowerCase()
        const suggestions = await Suggestion.findByCategory(categoryName)
        res.status(200).json(suggestions)

    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

async function showId(req, res) {
    try {
        const id = parseInt(req.params.id)
        const suggestion = await Suggestion.findById(id)
        res.status(200).json(suggestion)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function create(req,res) {


    if(!req.body.title && !req.body.content){
        throw new Error('You need a title and content to create a suggestion')
    }

    try{
        const data = req.body
        const newSuggestion = await Suggestion.create(data)
        res.status(201).json(newSuggestion)

    } catch(err){
        res.status(400).json({ error: err.message })
    }
}

async function update(req,res) {
    try {
        const id = parseInt(req.params.id)
        const data = req.body
        const suggestionToUpdate = await Suggestion.findById(id)
        const updatedSuggestion = await suggestionToUpdate.update(data)
        res.status(updatedSuggestion)

    } catch(err){
        res.status(404).send({error: err.message})
    }
}


async function destroy(req,res) {
    try {
        const suggestionId = parseInt(req.params.id)
        const suggestionToDelete = await Suggestion.findById(suggestionId)
        await suggestionToDelete.destroy()
        res.sendStatus(204)
     } catch(err){
         res.status(404).send({error: err.message})
         
     } 
}

module.exports = {
    index, showCategory, showId, create, update, destroy
}
