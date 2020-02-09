/* eslint-disable new-cap */

const LocalStrategy = require('passport-local').Strategy,
    crypto = require('crypto-js'),
    db = require('./sequalize'),
    userService = require('../services/userServices/userService');

module.exports = (passport) => {

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        const user = userService.getUser(email, true);

        if (!user) return done(new Error('Invalid username or password'));

        const passwordAndSalt = password + user.salt;
        const hashedPassword = crypto.SHA256(passwordAndSalt).toString();

        if (!(hashedPassword === user.password)) return done(new Error('Invalid username or password'));

        return done(null, userService.mapUserToResponseModel(user));
    }));
};
