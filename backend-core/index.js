const express = require('express');
const cors = require("cors");
const app = express();
const port = 3001

app.use(cors());

app.get('/', function(req, res, next) {
    res.send('Hello World!')
})

app.get('/testRoute', function(req, res, next) {
    res.send('Hello World! testRoute')
})

app.listen(port, function() {
    console.log('Example app listening on port'+ port + '!')
})