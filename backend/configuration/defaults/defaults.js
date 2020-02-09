const defaults = {
    serverPort: 8080,
    patterns: {
        models: 'backend/models/*.js',
        routes: 'backend/routes/*.js'
    },
    sequalizeCredentials: {
        databaseName: '',
        userName: '',
        password: '',
        options: {

        }
    }
};

if (process.env.NODE_ENV === 'dev') {

    // you need to define function which takes defaults object and change fields in it
    const fs = require('fs');
    if (fs.existsSync(`${__dirname}/defaults-override.js`)) require('./defaults-override.js')(defaults);
}

module.exports = defaults;
