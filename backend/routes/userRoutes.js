const userController = require('../controllers/userController');

module.exports = (app) => {
    app.route('/api/user').get(userController.getCurrentUser);
    app.route('/api/login').post(userController.loginUser);

    app.route('/api/register').post(userController.registerUser);

    app.route('/api/logout').post(userController.logoutUser);
};
