import mysql from 'mysql'

const db = mysql.createPool({
  host: '192.168.10.15',
  user: 'wuxing',
  password: 'Test123!',
  database: 'db_test',
})
const sqlstr = 'select * from grades'

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
  const sqlstr = "select * from grades"
  db.query(sqlstr, (err, res)=>{
    if(err){
      return err
    }
      return res
  })
}

async function getTab(){
  const sqlstr = "select * from testtab"
  db.query(sqlstr, (err, res)=>{
    if(err){
      return err
    }
    return res
  })
}

async function print(){
  const res1 = await getGrades()
  const res2 = await getTab()
  console.log(res1)
  res1.forEach(element => {
    console.log(element.month, element.grade)
  });
  
  
    console.log(element.col1, element.col2)
  });
}

print()