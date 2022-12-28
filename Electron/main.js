const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      // nodeIntegration: true,
      // contextIsolation: false
      preload: path.resolve(__dirname, './render/preload.js')
    }
  })

  // win.loadURL('https://www.zhihu.com/hot')
  win.loadFile('./test.html')

  // 隐藏警告信息
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

  // 打开调试工具
  win.webContents.openDevTools()
}

// 主进程生命周期函数
app.on('window-all-closed', () => {
  console.log('window all closed')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('quit', () => {
  console.log('app quit')
})


app.whenReady().then(createWindow)