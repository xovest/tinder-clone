import express from 'express'
import mongoose from 'mongoose'

import Cards from './dbCards.js'

const app = express()
const port = 8001 //do with process.env lol
const connection_url = 'mongodb+srv://admin:whatever@cluster0.lypp.mongodb.net/tinder?retryWrites=true&w=majority'

// configuration:
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => {
  res.status(200).send('yo')
})

app.post('/tinder/card', (req, res) => {
  const dbCard = req.body

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => console.log('listening'))

// didn't quite use mongodb on this one, but it's not the first time I'm seeing this process though (not deploying this btw lol)