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

    static async findById (id) {
        const response = await db.query('SELECT * FROM suggestions WHERE id = $1', [id])

        if (response.rows.length === 0) {
            throw new Error ('Unable to locate suggestion')
        } 
        return new Suggestion(response.rows[0])
    }

    static async create (data) {
        const { title, content } = data
        const response = await db.query('INSERT INTO suggestions (title, content) VALUES ($1, $2) RETURNING *', [title, content])

        return new Suggestion(response.rows[0])
    }
}