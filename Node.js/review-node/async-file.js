import fs from 'fs'
import { URL } from 'url'
import path from 'path'

function produceFile() {
  let savs = []
  for (let i = 0; i < 500; i++) {
    savs.push((Math.random() * 20).toFixed(5) + '\n')
  }

  // 同步方式执行 阻塞当前代码
  fs.writeFileSync('./testtext.txt', savs.join(''), 'utf8', (err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('write done.')
    }
  })
}

function readFile() {
  produceFile()

  // read file
  fs.readFile('./testtext.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log(data)
      console.log('read done.')
    }
  })
}


const __filename = new URL('', import.meta.url).pathname
const __dirname = new URL('', import.meta.url).pathname

const tmp = path.join('a', '../b', 'c')


console.log(path.basename('./test/test.js'))
console.log(path.extname(__dirname))




