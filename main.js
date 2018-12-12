const { app, BrowserWindow } = require("electron");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 100,
        height: 100,
        "accept-first-mouse": true,
        frame: false,
        "title-bar-style": "hidden",
        transparent: true,
        toolbar: false
    });
    mainWindow.setAlwaysOnTop(true);
    mainWindow.loadFile("index.html");
    // mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function() {
    if (mainWindow === null) {
        createWindow();
    }
});
