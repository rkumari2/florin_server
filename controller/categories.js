const Category = require('../model/Category')
const Suggestion = require('../model/Suggestion')




async function index(req,res){
    try {

    const categories = await Category.getAll()
    res.status(200).json(categories)

    } catch(err){
    res.status(502).json({error: err.message} )

    }
}

async function showId(req, res) {
    try {
        const id = parseInt(req.params.id)
        const category = await Category.findByCategoryId(id)
        res.status(200).json(category)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function showSuggestions(req, res) {
    try {
        const id = parseInt(req.params.id)
        const suggestions = await Suggestion.findSuggestionByCategory(id)
        res.status(200).json(suggestions)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function create(req,res) {


    try{
        const data = req.body
        const newSuggestion = await Suggestion.create(data)
        console.log(newSuggestion)
        res.status(201).json(newSuggestion)

    } catch(err){
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    index,showId,showSuggestions, create
}
