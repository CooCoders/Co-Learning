import express from 'express'

export const router = express.Router()

router.get('/gettest', (req, res) => {
  res.send('get request.')
})

router.post('/posttest', (req, res) => {
  console.log(req.body)
  res.send('post request.')
})

// export default { router }
// module.exports = router