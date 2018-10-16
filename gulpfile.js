var gulp = require('gulp');
var winInstaller = require('electron-winstaller');
  
gulp.task('create-windows-installer', function (done) {
    winInstaller.createWindowsInstaller({
        appDirectory: '/kittenblock-win32-x64',
        outputDirectory: './release',
        arch: 'ia32',
        authors: "LeetoChen",
        version: "1.0.0",
        noMsi:true
    }).then().catch();
});