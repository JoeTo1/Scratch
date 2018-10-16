const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const express = require('express');
const exec = require('child_process').exec;
const upload_cmd = __dirname + '//arduino//arduino_debug --board arduino:avr:uno --upload ' + __dirname + '//test//test.ino';
const dialog = electron.dialog;
const ProgressBar = require('electron-progressbar');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

app.once('ready', () => {

    var server = express();

    server.get('/', function (req, res) {
        res.json('welcome');
    });

    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Show window when page is ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    server.post('/upload', function (req, res) {
        var progressbar = new ProgressBar({
            indeterminate: true,
            text: 'Uploading...',
            detail: ''
        });
        progressbar
            .on('completed', function () {
                progressbar.detail = 'Upload Success.';
            })
            .on('progress', function (value) {
                progressbar.detail = '';
            });

        exec(upload_cmd, (err, stdout, stderr) => {
            if (err) {
                dialog.showMessageBox({
                    type: 'info',
                    buttons: ['OK', 'Cancel'],
                    message: 'Upload Failed!'
                }, resp => {});
            } else {
                dialog.showMessageBox({
                    type: 'info',
                    buttons: ['OK', 'Cancel'],
                    message: 'Upload Success!'
                }, resp => {});
            }
            progressbar.close();
        });
    });

    server.listen(3000);
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
