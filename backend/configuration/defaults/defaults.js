const defaults = {
    serverPort: 8080,
    patterns: {
        models: 'models/*.js',
        routes: 'routes/*.js'
    },
    sequalizeCredentials: {
        databaseName: '',
        userName: '',
        password: '',
        options: {

        }
    },
    session: {
        secret: 'f8asf8sa9fnfdsf8dsa8fADADAadangjn4'
    },
    redis: {
        host: 'localhost',
        port: 6379
    }
};

if (process.env.NODE_ENV === 'dev') {

    // you need to define function which takes defaults object and change fields in it
    const fs = require('fs');
    if (fs.existsSync(`${__dirname}/defaults-override.js`)) require('./defaults-override.js')(defaults);
}

module.exports = defaults;
