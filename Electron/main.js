const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu, MenuItem } = require('electron')
const createTray = require('./tray.js')
const path = require('path')
// import { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu, MenuItem } from 'electron'
// import path from 'path'
// import WinState from 'electron-win-state'
// const WinStatea = WinState.default
const WinState = require('electron-win-state').default


const createWindow = () => {
  const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600
  })
  const win = new BrowserWindow({
    ...winState.winOptions,
    // width: 1000,
    // height: 600,
    // x: 100,
    // y: 100,
    show: false,
    backgroundColor: '#ccc',
    // 是否隐藏标题栏
    // frame: false,
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
  const wc = win.webContents
  // 判断页面资源是否加载完毕
  wc.on('did-finish-load', () => {
    console.log('finish')
  })

  wc.on('dom-ready', () => {
    console.log('dom-ready')
  })

  // 判断是否点击右键：
  // wc.on('context-menu', (e, params) => {
  //   // e.preventDefault()
  //   console.log('menu')
  //   // 可以注入 js 代码
  //   // wc.executeJavaScript(`alert('${params.selectionText}')`)

  //   // 显示文件选择对话框
  //   // dialog.showOpenDialog({
  //   //   buttonLabel: 'Select',
  //   //   defaultPath: app.getPath('desktop'),
  //   //   properties: ['multiSelections', 'createDirectory', 'openFile', 'openDirectory']
  //   // }).then((result) => {
  //   //   console.log(result.filePaths)
  //   // })

  //   // 保存对话框
  //   // dialog.showSaveDialog({}).then(result => {
  //   //   // 注意这里只是显示对话框 实际的保存需要另写逻辑
  //   //   console.log(result.filePath)
  //   // })

  //   // 消息框
  //   const answers = ['Yes', 'No', 'Maybe', 'Maybe OK']
  //   dialog.showMessageBox({
  //     title: 'Message Box',
  //     message: 'Select one',
  //     detail: 'message box detail',
  //     buttons: answers
  //   }).then(({ response }) => {
  //     console.log(`User selected: ${answers[response]}`)
  //   })
  // })


  // 注册全局快捷键
  globalShortcut.register('Ctrl+G', () => {
    dialog.showMessageBox({
      title: 'warning',
      message: 'some test sentences.',
      detail: 'message detail'
    })
  })

  // 注销全局快捷键
  globalShortcut.register('Ctrl+Y', () => {
    console.log('Press Ctrl + Y')
    globalShortcut.unregister('Ctrl+G')
  })

  // 为应用添加自定义菜单
  const mainMenu = Menu.buildFromTemplate([
    {
      label: 'Electron',
      submenu: [
        { label: 'Item 1' },
        {
          label: 'Item 2',
          submenu: [
            { label: 'submenu 1' },
            { label: 'submenu 2' }
          ]
        },
        { label: 'Item 3' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'Actions',
      submenu: [
        {
          label: 'DevTools',
          role: 'toggleDevTools'
        },
        {
          role: 'toggleFullScreen'
        },
        {
          label: 'Greet',
          click: () => {
            console.log('click this menu item')
          },
          accelerator: 'Shift+Ctrl+G'
        }
      ]
    }
  ])

  Menu.setApplicationMenu(mainMenu)
  let contextMenu = Menu.buildFromTemplate([
    { label: 'test item' },
    { role: 'editMenu' }
  ])

  wc.on('context-menu', () => {
    contextMenu.popup()
  })


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

  // console.log(winState.winOptions)
  // winState.manage(this.win)

  createTray(app, win)
}



// 主进程生命周期函数
// app.on('window-all-closed', () => {
//   console.log('window all closed')
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('before-quit', () => {
//   console.log('before-quit term.')
// })

// app.on('browser-window-blur', () => {
//   // console.log('blur')
//   // setTimeout(() => {
//   //   app.quit()
//   // }, 3000)
// })

// app.on('browser-window-focus', () => {
//   console.log('focus')
// })

// app.on('quit', () => {
//   console.log('app quit')
// })

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