const { v4: uuidv4 } = require("uuid");

const db = require('../database/connect')

class Token {
    constructor({id, user_id, token}) {
        this.id = id;
        this.user_id = user_id;
        this.token = token
    }
    
}


module.exports = Token;
