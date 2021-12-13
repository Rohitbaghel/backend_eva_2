const express = require('express');

const app = express();
app.use(express.json())

const userController = require('./controller/user.controller')
const moviesController = require('./controller/movies.controller')
const TheaterController = require('./controller/theater.controller')
const screenController = require('./controller/screen.controller')
const seatController = require('./controller/seats.controller')
const showsController = require('./controller/shows.controller')
const showController = require('./controller/show.contoller')
app.use("/users", userController)
app.use("/movies", moviesController)
app.use("/theater", TheaterController)
app.use("/screen", screenController)
app.use("/seats",seatController)
app.use("/shows", showsController)
app.use("/show", showController)
module.exports =app