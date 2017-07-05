const ftp = require('ftp'),
      fs = require('fs');

var client = new ftp(),
    host = process.env.FTP_HOST,
    username = process.env.FTP_USERNAME,
    password = process.env.FTP_PASSWORD,
    directory = process.env.FTP_DIRECTORY;

client.on('ready', function() {
    console.log("CLOBBERING DIRECTORY: " + directory);
    client.end();
});

client.connect({
    host: host,
    user: username,
    password: password
});