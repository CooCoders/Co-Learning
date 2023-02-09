import express, { application } from 'express'
import bodyParser from 'body-parser'


const app = express()

// 托管静态资源
app.use('/pages', express.static('./public'))
app.use('/files', express.static('./files'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// app.get('/test', (req, res) => {
//   console.log(req.data)
//   res.send('message from server.')
// })

// app.post('/testpost', (req, res) => {
//   console.log(req.body)
//   console.log(req.query)
//   res.send('receive the post message.')
// })

// app.get('/testParams/:name', (req, res) => {
//   console.log(req.params)
//   res.send('req.params test')
// })

// 定义中间件函数
const middleware = (req, res, next) => {
  console.log('middleware function')
  next()
}

// 全局中间件定义
const globalfunc = (req, res, next) => {
  console.log('测试 全局中间件')
  next()
}

app.use(globalfunc)

app.use((req, res, next) => {
  console.log('测试简化全局中间件')
  next()
})

// 导入模块化路由
import { router } from './routers/testRouter.js'
app.use(router)


// app.get('*', (req, res) => {
//   console.log('processing...')
//   res.send("404 not found")
// })


app.listen(80, () => {
  console.log('server running at 127.0.0.1')
})