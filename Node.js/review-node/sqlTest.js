import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 数据库连接
import mysql from 'mysql'
const db = mysql.createPool({
  host: '192.168.10.15',
  user: 'wuxing',
  password: 'Test123!',
  database: 'db_test',
})

const queryData = (req, res, next) => {
  const sql = 'select * from grades'
  db.query(sql, (err, res) => {
    if (err) {
      return console.log(err.message)
    } else {
      console.log(res)
    }
  })
}

const insertData = (req, res, next) => {
  const month = req.body['month']
  const grade = req.body['grade']
  console.log(month, grade)
  // const sql = `insert into grades (month, grade) values (${month}, ${grade});`
  const sql = 'insert into grades (month, grade) values (?, ?)'
  db.query(sql, [month, grade], (err, res) => {
    if (err) {
      return console.log(err.message)
    } else {
      // console.log(res)
    }
  })
  next()
}

app.get('/test', (req, res) => {
  console.log('request')
  res.send('response.')
})

app.post('/insert', insertData, (req, res) => {
  res.send('insert done.')
  // console.log('done.')
})

app.use((err, req, res, next) => {
  if (err) {
    res.send(err.message)
    console.log(err.message)
  }
  // next()
})

app.listen(80, () => {
  console.log('server running at 127.0.0.1')
})