require('dotenv/config')
const mongsoose = require('mongoose') //ALLOWS MONGOOSE TO BE USED
const express = require('express') //ALLOWS EXPRESS TO BE USED
const app = express(); //CREATES THE SERVER
const cors = require('cors')

//PARSES BODY INTO JSON FORMAT
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//CONNECTS TO DATABASE
mongsoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to Database')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

//MIDDLEWARE
const routeCharacter = require('./routes/character')
const routeMove = require('./routes/move')
app.use(cors())
app.use('/character', routeCharacter)
app.use('/character', routeMove)

//GET - ROOT
app.get('/', (req, res) => {
    return res.status(200)
    .json({
        'message': 'Good Morning',
        'endpoints': {
        '/character': 'Gets characters.',
        '/character/name': 'Gets character moves.',
      },
    });
})

