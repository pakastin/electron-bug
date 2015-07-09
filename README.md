# electron-bug

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
