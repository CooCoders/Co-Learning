import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import numProcess from './routers/numbProcessing.js'
app.use(numProcess)

// 定义错误级别中间件
app.use((err, req, res, next) => {
  console.log(err.message)
  res.send(err.message)
})

app.listen(80, () => {
  console.log('server running at 127.0.0.1')
})