const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600
  })

  // win.loadURL('https://www.zhihu.com/hot')
  win.loadFile('./test.html')
}
app.whenReady().then(createWindow)