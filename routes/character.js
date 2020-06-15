const express = require('express') //ALLOWS EXPRESS TO BE USED
const router = express.Router() //CREATE ROUTER

//MODELS
const Character = require(('../models/Character'))

//GET LIST OF CHARACTERS
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find({}, { _id: 0 })
        res.status(200).json(characters)
    } catch(err) {
        res.status(500).json({ message: err})
    }
});

module.exports = router;