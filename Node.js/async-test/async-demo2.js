import mysql from 'mysql'

const db = mysql.createPool({
  host: '192.168.10.15',
  user: 'wuxing',
  password: 'Test123!',
  database: 'db_test',
})


function getSql(){
  db.query(sqlstr, (err, results)=>{
    if(err){
      console.log(err.message)
    }else{
      results.forEach(element => {
        console.log(element.month, element.grade)
      });
    }
  })
}

// 使用promise异步处理
function getSqlPromise(){
  const promise = new Promise((resolve, reject)=>{
    db.query(sqlstr, (err, res)=>{
      if(err){
        return reject(err)
      }
      resolve(res)
    })
  })
  promise.then((res)=>{
    res.forEach(element => {
      console.log(element.month, element.grade)
    });
    return res
  }, (err)=>{
    console.log(err.message)
  })
}

// getSqlPromise()

/* 函数返回promise对象的方式 */
function getSqlRes(){
  const promise = new Promise((resolve, reject)=>{
    db.query(sqlstr, (err, res)=>{
      if(err){
        return reject(err)
      }
      resolve(res)
    })
  })
  return promise
}

/* 通过链式调用
getSqlRes().then((res)=>{
  res.forEach(element => {
    console.log(element.month, element.grade)
  });
}).catch((err)=>{
  console.log(err.message)
}).finally(()=>{
  console.log('done.')
}) */

/* async-await方法 */
async function getGrades(){
  const sqlstr = "select * from grades limit 5"
  return new Promise((resolve, reject)=>{
    db.query(sqlstr, (err, res)=>{
      if(err){
        return reject(err)
      }
      return resolve(res)
    })
  })
}

async function getTab(){
  const sqlstr = "select * from testtab"
  return new Promise((resolve, reject)=>{
    db.query(sqlstr, (err, res)=>{
      if(err){
        reject(err)
      }
      resolve(res)
    })
  })
}

async function print(){
  const res1 = await getGrades()
  const res2 = await getTab()
  console.log(res1)
  console.log('aa')
  console.log(res2)
}

print()

async function timeout(){
  return "helloword"
}

async function timeout2(){
  return "wolrd"
}

async function print1(){
  const res = await timeout()
  console.log(res)
  console.log('aaaaa')
  const res2 = await timeout2()
  console.log(res2)
} 

// print1()