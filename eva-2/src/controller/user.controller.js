const express = require('express');

const router =express.Router()

const User = require("../model/user.model")
const upload = require("../middleware/upload")

router.get("" , async (req, res) => {
    const user = await User.find().lean().exec()
    res.send(user)
})

router.post("" ,upload.any("photo"), async (req, res) => {
try{
    const filepath = req.files.map(file => file.path)
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profile_photo_url:filepath,
        role: req.body.role
    })
return res.status(201).json(user)
}catch(err){
return res.status(500).json({message: err.message,status:"failed"})
}
})


module.exports= router