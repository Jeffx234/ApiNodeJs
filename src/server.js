import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

export const start = () => {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log('Listening on port', port)
  })
}

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' })
})

app.post('/signin', (req, res) => {
  const data = req.body
  return res.json({ data })
})
