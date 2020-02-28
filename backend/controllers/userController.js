const passport = require('passport'),
    handleErrors = require('../configuration/errors').handleErrors,
    userService = require('../services/userServices/userService');

exports.getCurrentUser = handleErrors(async (req, res) => res.send(req.user));

exports.registerUser = handleErrors(async (req, res, next) => {

    const user = await userService.registerUser(req.body);

    req.login(user, (err) => {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
});

exports.loginUser = handleErrors(async (req, res, next) => {
    passport.authenticate('local', { session: true }, (err, user) => {
        if (err) {
            next(err);
        } else {
            req.login(user, (err) => {
                if (err) {
                    next(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
});

exports.logoutUser = handleErrors(async (req, res) => {

    req.logout();
    res.sendStatus(200);
});
