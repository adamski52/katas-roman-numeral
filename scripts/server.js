var express = require('express'),
    path = require('path'),
    app = express();

app.listen(3000);

app.use(express.static(path.resolve(__dirname + '/../src')));

console.log("Express started at :3000");