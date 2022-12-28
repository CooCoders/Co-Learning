// import fs from 'fs'
const fs = require('fs')
// const path = require('path')

const savePath = "C:/Users/Xing Wu/Desktop"
fs.writeFile("./test.txt", 'some content.', () => {
  console.log('done.')
})