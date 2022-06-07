import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(bodyParser.json())
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening at https://localhost:${port}`)
})
