const express = require('express');

const router =express.Router()

const Theater = require("../model/theater.model")
// const upload = require("../middleware/upload")

router.get("" , async (req, res) => {
    try{

        const movies = await Movies.find().lean().exec()
        res.send(movies)
    }catch(e){
        return res.status(500).json({message: e.message,status:"failed"})
    }
})

router.post("",async (req, res) => {
    try{
const theater = await Theater.create(req.body)
return res.status(201).json(theater)

    }catch(e){
        return res.status(500).json({message: e.message,status:"failed"})
    }
})


module.exports= router