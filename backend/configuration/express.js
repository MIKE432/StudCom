const express = require('express'),
    glob = require('glob'),
    path = require('path'),
    defaults = require('./defaults/defaults');

const initRoutes = (app) => {

    const routes = glob.sync(path.resolve(defaults.patterns.routes));

    routes.forEach((route) => {
        require(route)(app);
    });
};

const initMiddleWares = (app) => {

};


module.exports = function () {
    const app = express();
    initRoutes(app);
    initMiddleWares(app);

    app.listen(defaults.serverPort, () => {
        console.log(`App is listening on port: ${defaults.serverPort}`);
    });
};
