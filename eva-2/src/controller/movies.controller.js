const express = require('express');

const router =express.Router()

const Movies = require("../model/movies.model")
const upload = require("../middleware/upload")

router.get("" , async (req, res) => {
    const movies = await Movies.find().lean().exec()
    res.send(movies)
})

router.post("" ,upload.any("poster_url "), async (req, res) => {
try{
    const filepath = req.files.map(file => file.path)
    const movies = await Movies.create({
        name: req.body.name,
        actors: req.body.actors,
        languages: req.body.languages,
        poster_url :filepath,
        directors: req.body.role
    })
return res.status(201).json(movies)
}catch(err){
return res.status(500).json({message: err.message,status:"failed"})
}
})


module.exports= router