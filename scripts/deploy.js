const ftp = require('ftp'),
      fs = require('fs');

var client = new ftp(),
    host = process.argv[2],
    username = process.argv[3],
    password = process.argv[4],
    directory = process.argv[5];

client.on('ready', function() {
    console.log("CLOBBERING DIRECTORY: " + directory);
    client.end();
});

client.connect({
    host: host,
    user: username,
    password: password
});