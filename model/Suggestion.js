const db = require('../database/connect')


class Suggestion {
    constructor(data) {
        this.id = data.id
        this.category_name = data.category_name
        this.title = data.title
        this.content = data.content
        this.user_id = data.user_id
    }

    static async getAll () {
        const response = await db.query('SELECT * FROM suggestions;')
        if ( response.rows.length === 0) {
            throw new Error ('No suggestions available')
        } else {
            console.log(response)
            return response.rows.map(s => new Suggestion(s))
        }
    }

    static async findByCategory (category) {
        const response = await db.query('SELECT * FROM suggestions WHERE LOWER(category_name) = $1', [category])
        console.log(response.rows)

        if (response.rows.length === 0) {
            throw new Error ('No suggestions available in this category')
        }
        return response.rows.map(s => new Suggestion(s))
    }

    static async findById (id) {
        const response = await db.query('SELECT * FROM suggestions WHERE id = $1', [id])

        if (response.rows.length === 0) {
            throw new Error ('Unable to locate suggestion')
        } 
        return new Suggestion(response.rows[0])
    }
    
    static async findSuggestionByCategory(category_id) {
        const response = await db.query('SELECT * FROM  categories JOIN suggestions ON categories.category = suggestions.category_name WHERE categories.id = $1;', [category_id])
        

        if (response.rows.length === 0) {
            throw new Error ('No suggestions available in this category')
        }

        return response.rows.map(s => new Suggestion(s))
    }
    

    static async create (data) {
        const { category_name, title, content, user_id} = data
        const response = await db.query(`
        INSERT INTO suggestions(category_name, title, content, user_id)
        VALUES ($1,$2,$3, $4) RETURNING *`, 
        [category_name, title, content, user_id])

        return new Suggestion(response.rows[0])
    }

    async update (data) {
        const response = await db.query('UPDATE suggestions SET content = $1 WHERE id = $2 RETURNING *', [data.content, this.id])
        if (response.rows.length !== 1) {
            throw new Error ('Unable to locate title')
        }

        return new Suggestion(response.rows[0])
    } 

    async destroy () {
        const response = await db.query('DELETE FROM suggestions WHERE id= $1 RETURNING *', [this.id])
        return new Suggestion(response.rows[0])
    }
}

module.exports = Suggestion;
