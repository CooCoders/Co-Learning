const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600
  })

  // win.loadURL('https://www.zhihu.com/hot')
  win.loadFile('./test.html')

  // 隐藏警告信息
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

  // 打开调试工具
  win.webContents.openDevTools()
}
app.whenReady().then(createWindow)