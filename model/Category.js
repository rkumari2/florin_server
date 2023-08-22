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
        const response = await db.query('SELECT * FROM categories WHERE id = $1', [id])

        if (response.rows.length === 0) {
            throw new Error ('Unable to locate category')
        } 
        return new Category(response.rows[0])
    }

    // static async findByCategory (category) {
    //     const response = await db.query('SELECT * FROM suggestions WHERE category_id = $1', [category])

    //     if (response.rows.length === 0) {
    //         throw new Error ('No suggestions available in this category')
    //     }
    //     return new Suggestion(response)
    // }


}

module.exports = Category;
