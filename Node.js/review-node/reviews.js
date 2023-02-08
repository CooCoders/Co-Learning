import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/test', (req, res) => {
  console.log(req.data)
  res.send('message from server.')
})

app.post('/testpost', (req, res) => {
  console.log(req.body)
  console.log(req.query)
  res.send('receive the post message.')
})

app.get('/testParams/:name', (req, res) => {
  console.log(req.params)
  res.send('req.params test')
})

app.listen(80, () => {
  console.log('server running at 127.0.0.1')
})