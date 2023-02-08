import fs from 'fs'

const letters = '0123456789abcdefghijklmnopq'.split('')
let randData = []

for (let i = 0; i < 10; i++) {
  randData.push(getRandStr())
}




function getRandStr(length = 5) {
  let charList = []
  for (let i = 0; i < length; i++) {
    charList.push(letters[parseInt(Math.random() * 25)])
  }
  return charList.join('')
}

