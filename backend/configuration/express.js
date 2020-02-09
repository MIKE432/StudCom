const express = require('express'),
    glob = require('glob'),
    path = require('path'),
    passport = require('passport'),
    defaults = require('./defaults/defaults'),
    initPassport = require('./passport');

const initRoutes = (app) => {

    const routes = glob.sync(path.resolve(defaults.patterns.routes));

    routes.forEach((route) => {
        require(route)(app);
    });
};

const initMiddleWares = (app) => {
    initPassport(passport, app);
};


module.exports = function () {
    const app = express();
    initRoutes(app);
    initMiddleWares(app);

    app.listen(defaults.serverPort, () => {
        console.log(`App is listening on port: ${defaults.serverPort}`);
    });
};
