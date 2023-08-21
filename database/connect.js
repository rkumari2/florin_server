const { Pool } = require('pg');

const db = new Pool({
    connectionString: process.env.DB_URL
})

console.log('line 7 connect.js')

module.exports = db
