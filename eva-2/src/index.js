const express = require('express');

const app = express();
app.use(express.json())

const userController = require('./controller/user.controller')
const moviesController = require('./controller/movies.controller')
const TheaterController = require('./controller/theater.controller')
app.use("/users", userController)
app.use("/movies", moviesController)
app.use("/theater", TheaterController)

module.exports =app