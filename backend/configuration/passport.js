/* eslint-disable new-cap */

const LocalStrategy = require('passport-local').Strategy,
    crypto = require('crypto-js'),
    db = require('./sequalize'),
    userService = require('../services/userServices/userService'),
    UnauthorizedError = require('../configuration/errors').UnauthorizedError

const initStrategy = (passport) => {

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        const user = await userService.getUser(email, true);
        if (!user) return done(new UnauthorizedError('Invalid username or password'));

        const passwordAndSalt = password + user.salt;
        const hashedPassword = crypto.SHA256(passwordAndSalt).toString();

        if (!(hashedPassword === user.password)) return done(new UnauthorizedError('Invalid username or password'));

        return done(null, userService.mapUserToResponseModel(user));
    }));
};

module.exports = (passport, app) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    initStrategy(passport);

    app.use(passport.initialize());
    app.use(passport.session());
};
