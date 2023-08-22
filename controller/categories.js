const Category = require('../model/Category')


async function index(req,res){
    try {

    const categories = await Category.getAll()
    res.status(200).json(categories)

    } catch(err){
    res.status(500).json({error: err.message} )

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

module.exports = {
    index,showId
}
