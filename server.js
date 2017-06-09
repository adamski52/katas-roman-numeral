require('dotenv').config();

var express = require('express'),
    path = require('path'),
    //proxy = require('express-http-proxy'),
    app = express(),
    fs = require('fs');

app.listen(3000);

//app.use('/api', proxy('api.github.com', {
//    https: true,
//    decorateRequest: function (proxyReq, originalReq) {
//        proxyReq.headers["authorization"] = "token " + process.env.API_KEY;
//        return proxyReq;
//    }
//}));

app.use(express.static(path.join(__dirname, 'src')));

console.log("Express started at :3000");