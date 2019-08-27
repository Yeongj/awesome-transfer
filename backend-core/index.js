const express = require('express');
const cors = require("cors");
const app = express();
const port = 3001

const file = require('./file');
const multer = require('multer');
var upload = multer()

app.use(cors());

app.get('/', function(req, res, next) {
    res.send('Hello World!');
})

app.get('/health', function(req, res, next) {
    res.send('OK');
})

app.get('/getVolumeList', function(req, res, next) {
    res.send(file.getVolumeList('./'))
})

app.get('/getFileDetail', function(req, res, next) {

    res.send('Hello World! getFileDetail')
})

app.get('/rename', function(req, res, next) {

    res.send('Hello World! rename')
})

app.get('/copy', function(req, res, next) {

    res.send('Hello World! copy')
})

app.get('/duplicate', function(req, res, next) {

    res.send('Hello World! duplicate')
})

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });
  
  var upload = multer({ storage : storage }).any();

app.post('/upload', function (req, res, next) {
    upload(req,res,function(err) {
        //console.log(req.body);
        //console.log(req.files);
        if(err) {
            console.log(err)
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
})

app.get('/download', function(req, res, next) {
    // res.download('/report-12345.pdf', 'report.pdf', function (err) {
    //     if (err) {
    //       // Handle error, but keep in mind the response may be partially-sent
    //       // so check res.headersSent
    //     } else {
    //       // decrement a download credit, etc.
    //     }
    //   });
    res.sendFile(__dirname + "/package.json");
    // res.send('Hello World! download')
})

app.listen(port, function() {
    console.log('app listening on port'+ port + '!')
})