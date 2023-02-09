import express from 'express'

const app = express()

import cors from 'cors'
app.use(cors())

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 全局中间件
app.use((req, res, next) => {
  console.log('global middleware.')
  next()
})

// 在第一个中间件函数中挂 startTime 属性
const local1 = (req, res, next) => {
  req.startTime = +new Date()
  console.log('local middleware function 1')
  next()
}

const local2 = (req, res, next) => {
  console.log('local middleware function 2')
  next()
}

// 路由
// 在路由中使用 startTime 属性
app.post('/test', [local1, local2], (req, res) => {
  console.log(req.startTime)
  res.send('post request received.')
})



app.listen(80, () => {
  console.log('server running at 127.0.0.1')
})