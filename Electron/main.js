const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    show: false,
    backgroundColor: '#ccc',
    frame: false,
    webPreferences: {
      // nodeIntegration: true,
      // contextIsolation: false
      preload: path.resolve(__dirname, './render/preload.js')
    }
  })

  // 加载外部网页
  // win.loadURL('https://mirrorn.github.io/')

  // 加载主页面
  win.loadFile('./test.html')

  // 隐藏警告信息
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

  // 打开调试工具
  // win.webContents.openDevTools()

  // 当页面内容加载完成的时候再显示页面
  win.once('ready-to-show', () => {
    win.show()
  })

  // const win2 = new BrowserWindow({
  //   height: 300,
  //   width: 400,
  //   // modal: true,
  //   parent: win,
  // })

  // win2.loadURL('http://www.baidu.com')
}



// 主进程生命周期函数
app.on('window-all-closed', () => {
  console.log('window all closed')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('before-quit', () => {
  console.log('before-quit term.')
})

app.on('browser-window-blur', () => {
  // console.log('blur')
  // setTimeout(() => {
  //   app.quit()
  // }, 3000)
})

app.on('browser-window-focus', () => {
  console.log('focus')
})

app.on('quit', () => {
  console.log('app quit')
})

// 异步监听
ipcMain.handle('send-event', (event, msg) => {
  console.log(msg)
})

app.whenReady().then(() => {
  createWindow()
  // createWindow2()


  console.log(app.getPath('desktop'))
  console.log(app.getPath('music'))
  console.log(app.getPath('temp'))
  console.log(app.getPath('userData'))
})