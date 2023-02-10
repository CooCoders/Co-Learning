import express from 'express'

const router = express.Router()

// import bodyParser from 'body-parser'
// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())

const process1 = (req, res, next) => {
  if (!req.body['num']) {
    throw new Error('No such parameter!!')
  }
  const num = parseInt(req.body['num'])
  req.num = num * 2
  next()
}

const process2 = (req, res, next) => {
  req.num += 1
  next()
}

router.post('/numProcess', [process1, process2], (req, res) => {
  req.num *= 2
  res.send('Processing result: ' + req.num)
})

export default router