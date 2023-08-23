const Suggestion = require('../model/Suggestion')

async function index(req,res) {
    try {
        const suggestions = await Suggestion.getAll()
        res.status(200).json(suggestions)

    } catch (err){
        res.status(502).json({ error:err.message })
    }
}

async function showCategory(req,res) {
    try {
        const categoryName = req.params.name.toLowerCase()
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



async function update(req,res) {
    try {
        console.log("Line 50 controller")
        const id = parseInt(req.params.id)
        const data = req.body
        const suggestionToUpdate = await Suggestion.findById(id)
        const updatedSuggestion = await suggestionToUpdate.update(data)
        res.status(201).json(updatedSuggestion)

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
    index, showId, showCategory, update, destroy
}
