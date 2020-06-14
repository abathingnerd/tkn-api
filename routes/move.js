const express = require('express') //ALLOWS EXPRESS TO BE USED
const router = express.Router() //CREATE ROUTER

//MODELS
const Move = require(('../models/Move'))

//GET CHARACTER MOVES
router.get('/:characterName', (req, res) => {
    const characterName = req.params.characterName
    Move.find({ "characterName": characterName }, { _id: 0, characterName: 0 })
    .exec()
    .then(result => {
        if(result) {
            res.status(200).json(result)
        }else {
            res.status(404).json({ message: 'Character not found'})
        }
    })
    .catch(err => {
        res.status(500).json(result)
    })
})

module.exports = router;