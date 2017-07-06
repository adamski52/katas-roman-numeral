const fs = require('fs-extra');

fs.copy("src", "dist", function(err) {
    if(err) {
        console.log(err);
        throw err;
    }
});