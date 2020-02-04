const defaults = {
    serverPort: 8080
}


if(process.env.NODE_ENV === "dev") {

    //you need to define function which takes defaults object and change fields in it
    const fs = require('fs')
    if(fs.existsSync(__dirname + "/defaults-override.js"))
        require("./defaults-override.js")(defaults)
}

module.exports = defaults