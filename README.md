# electron-bug
This example will open two windows: webview and iframe

## usage with bundled electron

```
npm install
npm start
```

## ..or

```
electron index.js
```

## What's happening?

### webview
When you place webview inside scaled div, webview gets double-scaled

![webview](http://pakastin.fi/electronbug1.png)

### iframe
When you place iframe inside scaled div, everything is like it should be

![iframe](http://pakastin.fi/electronbug2.png)

## public/index.html

```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>Webview</title>
    <style>
      html, body {
        height: 100%;
      }
      .container {
        width: 100%;
        height: 100%;
        transform: scale(0.5, 0.5);
      }
      .container webview {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <webview src="http://electron.atom.io/"></webview>
    </div>
  </body>
</html>
```
