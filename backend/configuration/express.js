const express = require('express'),
    glob = require('glob'),
    path = require('path'),
    cors = require('cors'),
    passport = require('passport'),
    redis = require('redis'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    redisStore = require('connect-redis')(session),
    client = redis.createClient(),
    defaults = require('./defaults/defaults'),
    initPassport = require('./passport');

const initRoutes = (app) => {

    const routes = glob.sync(path.resolve(defaults.patterns.routes));
    routes.forEach((route) => {
        require(route)(app);
    });

    app.get('/api/', (req, res) => {
        res.send('hello world');
    });
};

const setHeaders = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Content-Type'
        );
        next();
    });
};

const initMiddleWares = (app) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json()),
    app.use(cookieParser());

    app.use(session({
        secret: defaults.session.secret,
        name: defaults.session.name,
        store: new redisStore({
            port: defaults.redis.port,
            host: defaults.redis.host,
            client
        }),
        saveUninitialized: true,
        resave: false,
        cookie: { maxAge: 1800000 }
    }));

    initPassport(passport, app);
};


module.exports = function () {
    const app = express();
    setHeaders(app);
    initMiddleWares(app);
    initRoutes(app);


    app.listen(defaults.serverPort, () => {
        console.log(`App is listening on port: ${defaults.serverPort}`);
    });
};
