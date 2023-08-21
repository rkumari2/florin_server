const express = require('express')
const cors = require ('cors')
const logger = require('morgan')
const suggestionRoutes = require('./router/suggRouter')

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.json({
        name: "Florin Council", 
        description: "Welcome to the florin council API"
    })
})

app.use('/suggestions', suggestionRoutes)

module.exports = app;
