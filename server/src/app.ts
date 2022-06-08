import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import shortLinkRouter from './routes/shortLink.routes'

const url = 'mongodb://localhost:27017/smartShorter'
const connect = mongoose.connect(url)

const app = express()
app.use(cors())

app.use(express.json({
  type: () => true
}))
const port = process.env.PORT || 5000

app.use('/shortlinks', shortLinkRouter)

connect
  .then((db) => {
    console.log('connected successfully to the database')
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
