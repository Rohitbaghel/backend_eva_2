const express = require('express');

const router =express.Router()

const Show = require("../model/shows.model")
// const upload = require("../middleware/upload")

router.get("" , async (req, res) => {
    try{

        const show = await Show.find().lean().exec()
        res.send(show)
    }catch(e){
        return res.status(500).json({message: e.message,status:"failed"})
    }
})


router.post("",async (req, res) => {
    try{
const show = await Show.create(req.body)
return res.status(201).json(show)

    }catch(e){
        return res.status(500).json({message: e.message,status:"failed"})
    }
})


router.get("/seats", async (req,res)=>{
    try{
        const show = await Show.find().lean().exec();

        return res.status(200).json(show)
    }
    catch(err){
        return res.status(500).json({message:err.message, status:'Failed'});
    }
})



module.exports= router