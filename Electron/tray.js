const { Tray, app, Menu } = require('electron')

function createTray(app, mainwin) {

  // 图标设置
  const tray = new Tray('icon.png')
  // 提示文字设置
  tray.setToolTip('My app')
  // 设置点击事件
  tray.on('click', (e) => {
    if (e.shiftKey) {
      app.quit()
    } else {
      mainwin.isVisible() ? mainwin.hide() : mainwin.show()
    }
  })

  const contextMenu = Menu.buildFromTemplate([
    { label: 'test item' },
    {
      label: 'test item 2', click: () => {
        mainwin.isVisible() ? mainwin.hide() : mainwin.show()
      }
    }
  ])
  // 设置右键菜单
  tray.setContextMenu(contextMenu)
}

module.exports = createTray