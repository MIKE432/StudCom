const express = require('express'),
    defaults = require('./defaults/defaults')
    app = express();

app.get('/', (req, res) => {
    res.send("hello from backend")
})

app.listen(defaults.serverPort, () => {
    console.log("App is listening on port: " + defaults.serverPort)
})