const fs = require('fs-extra');

fs.remove("dist", function(err) {
    if (err) {
        throw err;
    }

    fs.copy("src", "dist", function (err) {
        if (err) {
            throw err;
        }
    });
});