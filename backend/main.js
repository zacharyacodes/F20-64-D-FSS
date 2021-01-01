const { app, BrowserWindow } = require('electron')
  const server = require("./index");

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    // width: 100%, 
    // height: 100%,
    // backgroundColor: '#ffffff',
    icon: `file://${__dirname}/public/assets/images/logo.png`
  })
  win.maximize()
  // win.setFullScreen(true) 
  win.loadURL(`file://${__dirname}/public/index.html`)




  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
