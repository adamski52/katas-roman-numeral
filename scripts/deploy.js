const ftp = require('ftp');

var client = new ftp(),
    host = process.env.FTP_HOST,
    username = process.env.FTP_USERNAME,
    password = process.env.FTP_PASSWORD,
    directory = process.env.FTP_DIRECTORY;

client.on('ready', function() {
    client.delete(directory, function(err) {
        if(err) {
            throw err;
        }

        client.put("dist/", directory, function(err) {
            if(err) {
                throw err;
            }

            client.end();
        });
    });
});

client.connect({
    host: host,
    user: username,
    password: password
});