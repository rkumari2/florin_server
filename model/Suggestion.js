const db = require('../database/connect')


class Suggestion {
    constructor(data) {
        this.id = data.id
        this.category_id = data.category_id
        this.title = data.title
        this.content = data.content
        this.user_id = data.user_id
    }

    static async getAll () {
        const response = await db.query('SELECT * FROM suggestions;')
        if (response.rows.length === 0) {
            throw new Error ('No suggestions available')
        } else {
            console.log(response)
            return response.rows.map(s => new Suggestion(s))
        }
    }

    static async findByCategory (category) {
        const response = await db.query('SELECT * FROM suggestions WHERE category_id = $1', [category])

        if (response.rows.length === 0) {
            throw new Error ('No suggestions available in this category')
        }
        return new Suggestion(response)
    }
}
