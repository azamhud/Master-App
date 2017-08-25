
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const newWindowBtn1 = document.getElementById('new-window-1')

newWindowBtn1.addEventListener('click', function (event) {
    const windw = BrowserWindow.getAllWindows();
    const modalPath = path.join('file://', __dirname, 'pages/home.html')
    windw[0].loadURL(modalPath)
    windw[0].show()
})