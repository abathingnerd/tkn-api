const express = require('express') //ALLOWS EXPRESS TO BE USED
const router = express.Router() //CREATE ROUTER

//MODELS
const Character = require(('../models/Character'))

//GET LIST OF CHARACTERS
router.get('/', (req, res) => {
    Character.find()
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(result)
        })
})

module.exports = router;