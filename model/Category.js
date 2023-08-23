const db = require('../database/connect')


class Category {
    constructor(data) {
        this.id = data.id
        this.category = data.category
    }

    static async getAll () {
        const response = await db.query('SELECT * FROM categories;')
        if (response.rows.length === 0) {
            throw new Error ('No categories available')
        } else {
            console.log(response)
            return response.rows.map(c => new Category(c))
        }
    }

    static async findByCategoryId (id) {
        const response = await db.query('SELECT * FROM categories WHERE id = $1;', [id])

        if (response.rows.length === 0) {
            throw new Error ('Unable to locate category')
        } 
        return new Category(response.rows[0])
    }

    static async findSuggestionByCategory(category_name) {
        const response = await db.query('SELECT * FROM suggestions WHERE category_name = $1', [category_name])
        console.log(response)

        if (response.rows.length === 0) {
            throw new Error ('No suggestions available in this category')
        }
        console.log(new Category(response.rows))
        return new Category(response.rows)
    }




}

module.exports = Category;
