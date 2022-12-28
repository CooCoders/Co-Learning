const { contextBridge, ipcRenderer } = require('electron')

const handleSend = () => {
  ipcRenderer.invoke('send-event', 'some text')
}

contextBridge.exposeInMainWorld('myAPI', {
  platform: process.platform,
  handleSend
})