const { Menu, MenuItem } = require('electron')

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

module.exports = mainMenu