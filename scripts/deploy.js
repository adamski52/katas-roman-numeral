const ftp = require("ftp"),
      async = require("async"),
      archiver = require("archiver"),
      fs = require("fs"),
      unzip = require("unzip");

var client = new ftp(),
    output = fs.createWriteStream("dist.zip"),
    archive = archiver("zip"),
    host = "localhost",
    username = "jon",
    password = "test",
    directory = "sandbox/";
    //host = process.env.FTP_HOST,
    //username = process.env.FTP_USERNAME,
    //password = process.env.FTP_PASSWORD,
    //directory = process.env.FTP_DIRECTORY;

function puke(err) {
    if(err) {
        console.log("PUKE");
        throw err;
    }
}

function deleteDir(path, callback) {
    console.log("DELETE DIR");
    client.rmdir(path, true, function(err) {
        puke(err);
        callback();
    });
}

function deleteFile(path, callback) {
    console.log("DELETE FILE");
    client.delete(path, function(err) {
        puke(err);

        callback();
    });
}

function deleteDestination(callback) {
    console.log("DELETE DESTINATION");

    client.on("ready", function() {
        client.list(directory, function(err, files) {
            onDirectoryList(err, files, callback);
        });
    });

    client.on("error", function(err) {
        throw err;
    });

    client.connect({
        host: host,
        user: username,
        password: password
    });
}

function uploadArchive(callback) {
    console.log("CREATE ARCHIVE");

    client.put("dist.zip", "dist.zip", function(err) {
        puke(err);

        callback();
    });
}

function unpackArchive(callback) {
    console.log("UNPACK ARCHIVE");
}

function createArchive(callback) {
    console.log("CREATE ARCHIVE");

    output.on("close", callback);

    archive.on("error", function(err) {
        throw err;
    });

    archive.on("warning", function(err) {
        if (err.code !== "ENOENT") {
            throw err;
        }
    });

    archive.pipe(output);
    archive.directory("dist/", false);
    archive.finalize();
}

function onFile(file, callback) {
    console.log("ON FILE");

    var fullPath = directory + file.name;

    if (file.type === "d") {
        deleteDir(fullPath, callback);
        return;
    }

    deleteFile(fullPath, callback);
}


function onDirectoryList(err, files, callback) {
    console.log("ON DIRECTORY LIST");
    puke(err);

    async.eachLimit(files, 5, onFile, function(err) {
        puke(err);

        callback();
    });
}

function init() {
    console.log("INIT");
    createArchive(function() {
        deleteDestination(function() {
            uploadArchive(function() {
                unpackArchive(function() {
                    console.log("DONE");
                    client.end();
                });
            });
        });
    });
}

init();
