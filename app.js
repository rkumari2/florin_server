const express = require('express')
const cors = require ('cors')
const logger = require('morgan')

const suggestionRoutes = require('./router/suggRouter')

const CategoryRouter = require('./router/categoriesRouter')

const userRoutes = require('./router/userRouter')


const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/suggestions', suggestionRoutes)
app.use('/categories', CategoryRouter)

app.get('/', (req, res) => {
    res.json({
        name: "Florin Council", 
        description: "Welcome to the florin council API"
    })
})

app.use('/suggestions', suggestionRoutes)
app.use('/categories', CategoryRouter)


module.exports = app;

