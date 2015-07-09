
var app = require('app')

app.on('ready', function () {
  var BrowserWindow = require('browser-window')

  var win = new BrowserWindow({width: 800, height: 600})

  win.loadUrl('file://' + __dirname + '/public/index.html')
  win.openDevTools()

  win.show()

  var win2 = new BrowserWindow({width: 800, height: 600})

  win2.loadUrl('file://' + __dirname + '/public/index2.html')
  win2.openDevTools()

  win2.show()
})
