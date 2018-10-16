var express = require('express');
var app = express();
var PythonShell = require('python-shell');
let Avrgirl = require('avrgirl-arduino');

var avrgirl = new Avrgirl({
    board: 'uno'
});

avrgirl.flash('test.hex', function (error) {
    if(error){
        console.error(error);
    } else {
        console.info('done');
    }
});

/*
app.set('port', 3000);

app.get('/', function (req, res) {
    res.json('welcome');
});

app.post('/upload', function (req, res) {
    // res.json('upload success');

    console.log('express upload test...');
    PythonShell.run('run_arduino.py', function (err, results) {
        if (err) {
            throw err;
        }
        console.log('result: %j', results);
    });
});

app.listen(3000);
*/
