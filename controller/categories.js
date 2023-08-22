const Category = require('../model/Category')


async function index(req,res){
    try {

    const categories = await Category.getAll()
    res.status(200).json(categories)

    } catch(err){
    res.status(500).json({error: err.message} )

    }
}

module.exports = {
    index
}
